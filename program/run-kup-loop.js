'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { writeResult } = require('./result-writer');
const { parseExperimentMarkdownStrict, validateExperimentV2 } = require('./validator-v2');
const { FAILURE_TYPES, classifyFailure, withFailureClassification } = require('./failure-classifier');

function normalizeAgentOutput(execution) {
  if (!execution || typeof execution !== 'object') {
    throw new Error('Agent execution did not return an object.');
  }

  const flowId = execution.flowId ?? execution.trace?.flowId;
  if (!flowId) {
    throw new Error('Missing flowId in agent execution output.');
  }

  if (!('result' in execution)) {
    throw new Error('Missing result in agent execution output.');
  }

  return {
    flowId,
    result: execution.result
  };
}

async function runKupLoop(experimentPath) {
  const resolvedPath = experimentPath ? path.resolve(process.cwd(), experimentPath) : null;
  const fallbackId = resolvedPath ? path.basename(resolvedPath, path.extname(resolvedPath)) : 'unknown-experiment';

  const readStep = await withFailureClassification({
    type: FAILURE_TYPES.VALIDATION,
    stage: 'read_experiment',
    experimentId: fallbackId,
    action: async () => {
      if (!resolvedPath) {
        throw new Error('Experiment path is required.');
      }
      return fs.readFile(resolvedPath, 'utf8');
    }
  });
  if (!readStep.ok) {
    return { id: fallbackId, status: 'failed', result: null, flowId: null, error: readStep.error };
  }

  const parsed = parseExperimentMarkdownStrict(readStep.value);
  if (!parsed.valid) {
    return {
      id: fallbackId,
      status: 'failed',
      result: null,
      flowId: null,
      error: classifyFailure({
        type: FAILURE_TYPES.VALIDATION,
        stage: 'validate_experiment',
        message: parsed.errors.join('; '),
        experimentId: fallbackId
      })
    };
  }

  const validation = validateExperimentV2(parsed.parsed);
  const experimentId = parsed.parsed && parsed.parsed.id ? parsed.parsed.id : fallbackId;

  if (!validation.valid) {
    return {
      id: experimentId,
      status: 'failed',
      result: null,
      flowId: null,
      error: classifyFailure({
        type: FAILURE_TYPES.VALIDATION,
        stage: 'validate_schema',
        message: validation.errors.join('; '),
        experimentId
      })
    };
  }

  const experiment = parsed.parsed;
  const { runAgent } = require('decide.engine-tools/core/run-agent');
  const { recordExecution } = require('decide.engine-tools/core/memory-store');

  const execStep = await withFailureClassification({
    type: FAILURE_TYPES.AGENT_EXECUTION,
    stage: 'run_agent',
    experimentId,
    action: async () => runAgent(experiment.agent, experiment.input)
  });
  if (!execStep.ok) {
    return { id: experimentId, status: 'failed', result: null, flowId: null, error: execStep.error };
  }

  let normalized;
  try {
    normalized = normalizeAgentOutput(execStep.value);
  } catch (error) {
    return {
      id: experimentId,
      status: 'failed',
      result: null,
      flowId: null,
      error: classifyFailure({
        type: FAILURE_TYPES.TRACE_MISSING,
        stage: 'trace_validation',
        message: error instanceof Error ? error.message : 'Trace validation failed',
        experimentId
      })
    };
  }

  const memoryStep = await withFailureClassification({
    type: FAILURE_TYPES.MEMORY_WRITE,
    stage: 'record_execution',
    experimentId,
    action: async () => recordExecution({
      id: experiment.id,
      result: normalized.result,
      flowId: normalized.flowId,
      timestamp: Date.now()
    })
  });
  if (!memoryStep.ok) {
    return { id: experimentId, status: 'failed', result: normalized.result, flowId: normalized.flowId, error: memoryStep.error };
  }

  const resultStep = await withFailureClassification({
    type: FAILURE_TYPES.RESULT_WRITE,
    stage: 'write_result',
    experimentId,
    action: async () => writeResult({ id: experiment.id, result: normalized.result, flowId: normalized.flowId })
  });
  if (!resultStep.ok) {
    return { id: experimentId, status: 'failed', result: normalized.result, flowId: normalized.flowId, error: resultStep.error };
  }

  return {
    id: experimentId,
    status: 'success',
    result: normalized.result,
    flowId: normalized.flowId,
    outputPath: resultStep.value,
    error: null
  };
}

if (require.main === module) {
  runKupLoop(process.argv[2])
    .then((summary) => {
      console.log(JSON.stringify(summary, null, 2));
      if (summary.status === 'failed') {
        process.exit(1);
      }
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    });
}

module.exports = {
  runKupLoop,
  normalizeAgentOutput
};

'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { validateExperiment, PIPELINE_ERROR } = require('./validator');
const { writeResult } = require('./result-writer');

function failPipeline() {
  throw new Error(PIPELINE_ERROR);
}

function parseExperimentMarkdown(markdown) {
  const trimmed = markdown.trim();

  const fencedJsonMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const jsonCandidate = fencedJsonMatch ? fencedJsonMatch[1] : trimmed;

  try {
    return JSON.parse(jsonCandidate);
  } catch {
    failPipeline();
  }
}

function normalizeAgentOutput(execution) {
  if (!execution || typeof execution !== 'object') {
    failPipeline();
  }

  const flowId = execution.flowId ?? execution.trace?.flowId;
  if (!flowId) {
    failPipeline();
  }

  if (!('result' in execution)) {
    failPipeline();
  }

  return {
    flowId,
    result: execution.result
  };
}

async function runKupLoop(experimentPath) {
  try {
    if (!experimentPath) {
      failPipeline();
    }

    const absoluteExperimentPath = path.resolve(process.cwd(), experimentPath);
    const markdown = await fs.readFile(absoluteExperimentPath, 'utf8');
    const experiment = validateExperiment(parseExperimentMarkdown(markdown));

    const { runAgent } = require('decide.engine-tools/core/run-agent');
    const { recordExecution } = require('decide.engine-tools/core/memory-store');

    if (typeof runAgent !== 'function' || typeof recordExecution !== 'function') {
      failPipeline();
    }

    const execution = await runAgent(experiment.agent, experiment.input);
    const { result, flowId } = normalizeAgentOutput(execution);

    await Promise.resolve(recordExecution({
      id: experiment.id,
      result,
      flowId,
      timestamp: Date.now()
    }));

    const outputPath = await writeResult({
      id: experiment.id,
      result,
      flowId
    });

    return {
      id: experiment.id,
      flowId,
      outputPath
    };
  } catch (error) {
    if (error && error.message === PIPELINE_ERROR) {
      throw error;
    }

    failPipeline();
  }
}

if (require.main === module) {
  runKupLoop(process.argv[2])
    .then((summary) => {
      console.log(JSON.stringify(summary, null, 2));
    })
    .catch(() => {
      console.error(PIPELINE_ERROR);
      process.exit(1);
    });
}

module.exports = {
  runKupLoop,
  parseExperimentMarkdown,
  normalizeAgentOutput
};

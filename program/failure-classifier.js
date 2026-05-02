'use strict';

const FAILURE_TYPES = Object.freeze({
  VALIDATION: 'FAIL_VALIDATION',
  AGENT_EXECUTION: 'FAIL_AGENT_EXECUTION',
  TRACE_MISSING: 'FAIL_TRACE_MISSING',
  MEMORY_WRITE: 'FAIL_MEMORY_WRITE',
  RESULT_WRITE: 'FAIL_RESULT_WRITE'
});

function classifyFailure({ type, stage, message, experimentId }) {
  return {
    type,
    stage,
    message,
    experimentId
  };
}

async function withFailureClassification({ type, stage, experimentId, action }) {
  try {
    return { ok: true, value: await action() };
  } catch (error) {
    return {
      ok: false,
      error: classifyFailure({
        type,
        stage,
        message: error instanceof Error ? error.message : 'Unknown error',
        experimentId
      })
    };
  }
}

module.exports = {
  FAILURE_TYPES,
  classifyFailure,
  withFailureClassification
};

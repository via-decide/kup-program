'use strict';

const assert = require('node:assert/strict');
const { ACTIONS, decide } = require('./decision-engine');

(function testStopOnRepeatedFailure() {
  const decision = decide({
    history: [{ status: 'failed' }, { status: 'failed' }, { status: 'failed' }],
    failureRate: 0.1
  });

  assert.equal(decision.action, ACTIONS.STOP);
})();

(function testModifyOnFailureRate() {
  const decision = decide({
    failureRate: 0.5,
    history: [{ status: 'success' }]
  });

  assert.equal(decision.action, ACTIONS.MODIFY);
})();

(function testModifyOnLatency() {
  const decision = decide({
    failureRate: 0,
    latency: 1900,
    activeExperiment: { latencyThresholdMs: 1000 },
    history: [{ status: 'success' }]
  });

  assert.equal(decision.action, ACTIONS.MODIFY);
})();

(function testNextExperimentOnStableSuccess() {
  const decision = decide({
    lastResult: { status: 'success' },
    failureRate: 0,
    history: [{ status: 'success' }]
  });

  assert.equal(decision.action, ACTIONS.NEXT_EXPERIMENT);
})();

(function testRetryFallback() {
  const decision = decide({
    lastResult: { status: 'failed' },
    failureRate: 0.2,
    history: [{ status: 'failed' }, { status: 'success' }]
  });

  assert.equal(decision.action, ACTIONS.RETRY);
})();

console.log('decision-engine tests passed');

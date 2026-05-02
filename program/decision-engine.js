'use strict';

const DEFAULT_LATENCY_THRESHOLD_MS = 1200;
const REPEATED_FAILURE_STREAK = 3;

const ACTIONS = Object.freeze({
  RETRY: 'RETRY',
  MODIFY: 'MODIFY',
  NEXT_EXPERIMENT: 'NEXT_EXPERIMENT',
  STOP: 'STOP'
});

function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function toLatencyThreshold(context) {
  const candidate = context && context.activeExperiment && context.activeExperiment.latencyThresholdMs;
  return isFiniteNumber(candidate) && candidate > 0 ? candidate : DEFAULT_LATENCY_THRESHOLD_MS;
}

function isSuccess(result) {
  if (!result || typeof result !== 'object') {
    return false;
  }

  return result.status === 'success' || result.ok === true;
}

function hasRepeatedFailure(context, streakSize = REPEATED_FAILURE_STREAK) {
  const history = Array.isArray(context && context.history) ? context.history : [];

  if (history.length < streakSize) {
    return false;
  }

  const recent = history.slice(-streakSize);
  return recent.every((entry) => !isSuccess(entry));
}

function buildPatch(context, hint) {
  const patch = {
    experimentId: context && context.activeExperiment && context.activeExperiment.id ? context.activeExperiment.id : null,
    basedOnFlowId: context && context.lastResult && context.lastResult.flowId ? context.lastResult.flowId : null,
    strategy: hint
  };

  return patch;
}

function decide(context) {
  const safeContext = context && typeof context === 'object' ? context : {};
  const failureRate = isFiniteNumber(safeContext.failureRate) ? safeContext.failureRate : 0;
  const latency = isFiniteNumber(safeContext.latency) ? safeContext.latency : null;
  const threshold = toLatencyThreshold(safeContext);
  const repeatedFailure = hasRepeatedFailure(safeContext);

  if (repeatedFailure) {
    return {
      action: ACTIONS.STOP,
      reason: `Detected repeated failure streak in last ${REPEATED_FAILURE_STREAK} runs.`,
      patch: buildPatch(safeContext, 'halt-and-review')
    };
  }

  if (failureRate > 0.3) {
    return {
      action: ACTIONS.MODIFY,
      reason: `Failure rate ${failureRate} is above 0.3 threshold.`,
      patch: buildPatch(safeContext, 'reduce-failure-rate')
    };
  }

  if (latency !== null && latency > threshold) {
    return {
      action: ACTIONS.MODIFY,
      reason: `Latency ${latency}ms exceeded threshold ${threshold}ms.`,
      patch: buildPatch(safeContext, 'optimize-latency')
    };
  }

  if (isSuccess(safeContext.lastResult) && failureRate === 0) {
    return {
      action: ACTIONS.NEXT_EXPERIMENT,
      reason: 'Last result succeeded and current failure rate is stable at 0.',
      patch: buildPatch(safeContext, 'promote-next-experiment')
    };
  }

  return {
    action: ACTIONS.RETRY,
    reason: 'No stop/modify/advance trigger matched; retrying current experiment.',
    patch: buildPatch(safeContext, 'retry-current-experiment')
  };
}

module.exports = {
  ACTIONS,
  DEFAULT_LATENCY_THRESHOLD_MS,
  REPEATED_FAILURE_STREAK,
  decide,
  hasRepeatedFailure,
  isSuccess
};

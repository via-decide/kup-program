'use strict';

const { createMetricsStore } = require('./metrics-store');

const DEFAULT_ROLLING_WINDOW = 500;

function toFlowMetrics(flow) {
  if (!flow || typeof flow !== 'object') return null;
  if (!Number.isFinite(flow.startTime) || !Number.isFinite(flow.endTime)) return null;
  if (flow.endTime < flow.startTime) return null;

  const spans = Array.isArray(flow.spans) ? flow.spans : [];
  const errorCount = spans.reduce((count, span) => count + (span && (span.error || span.status === 'error') ? 1 : 0), 0);
  const status = errorCount > 0 || flow.status === 'failed' || flow.error ? 'failed' : 'success';

  return {
    flowId: flow.flowId,
    duration: flow.endTime - flow.startTime,
    spanCount: spans.length,
    errorCount,
    status,
    startTime: flow.startTime,
    endTime: flow.endTime
  };
}

function createMeasurementEngine(options = {}) {
  const windowSize = Number.isInteger(options.windowSize) && options.windowSize > 0
    ? options.windowSize
    : DEFAULT_ROLLING_WINDOW;
  const store = createMetricsStore({ windowSize });

  function recordFlow(flow) {
    const flowMetrics = toFlowMetrics(flow);
    if (!flowMetrics || !flowMetrics.flowId) return null;
    store.setFlow(flowMetrics);
    return flowMetrics;
  }

  function getMetrics() {
    return store.getSnapshot();
  }

  function getFlowMetrics(flowId) {
    return store.getFlow(flowId);
  }

  function resetMetrics() {
    store.reset();
  }

  return { recordFlow, getMetrics, getFlowMetrics, resetMetrics };
}

const defaultEngine = createMeasurementEngine();

module.exports = {
  DEFAULT_ROLLING_WINDOW,
  createMeasurementEngine,
  recordFlow: defaultEngine.recordFlow,
  getMetrics: defaultEngine.getMetrics,
  getFlowMetrics: defaultEngine.getFlowMetrics,
  resetMetrics: defaultEngine.resetMetrics
};

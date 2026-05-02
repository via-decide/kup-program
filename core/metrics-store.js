'use strict';

function createMetricsStore(options = {}) {
  const configuredWindow = Number.isInteger(options.windowSize) && options.windowSize > 0
    ? options.windowSize
    : null;

  const state = {
    totalFlows: 0,
    successCount: 0,
    failureCount: 0,
    totalLatency: 0,
    maxLatency: null,
    minLatency: null,
    totalSpans: 0,
    firstFlowStartTime: null,
    lastUpdated: null,
    flowMap: new Map(),
    order: []
  };

  function removeFlow(flowId) {
    const metrics = state.flowMap.get(flowId);
    if (!metrics) return;

    state.totalFlows -= 1;
    state.totalLatency -= metrics.duration;
    state.totalSpans -= metrics.spanCount;

    if (metrics.status === 'failed') state.failureCount -= 1;
    else state.successCount -= 1;

    state.flowMap.delete(flowId);
    state.order = state.order.filter((id) => id !== flowId);

    if (state.flowMap.size === 0) {
      state.maxLatency = null;
      state.minLatency = null;
      state.firstFlowStartTime = null;
      return;
    }

    if (metrics.duration === state.maxLatency || metrics.duration === state.minLatency || metrics.startTime === state.firstFlowStartTime) {
      let max = null;
      let min = null;
      let first = null;

      for (const value of state.flowMap.values()) {
        max = max === null ? value.duration : Math.max(max, value.duration);
        min = min === null ? value.duration : Math.min(min, value.duration);
        first = first === null ? value.startTime : Math.min(first, value.startTime);
      }

      state.maxLatency = max;
      state.minLatency = min;
      state.firstFlowStartTime = first;
    }
  }

  function setFlow(flowMetrics) {
    const existing = state.flowMap.get(flowMetrics.flowId);
    if (existing) removeFlow(flowMetrics.flowId);

    state.flowMap.set(flowMetrics.flowId, flowMetrics);
    state.order.push(flowMetrics.flowId);

    state.totalFlows += 1;
    state.totalLatency += flowMetrics.duration;
    state.totalSpans += flowMetrics.spanCount;
    state.lastUpdated = flowMetrics.endTime;

    if (flowMetrics.status === 'failed') state.failureCount += 1;
    else state.successCount += 1;

    state.maxLatency = state.maxLatency === null ? flowMetrics.duration : Math.max(state.maxLatency, flowMetrics.duration);
    state.minLatency = state.minLatency === null ? flowMetrics.duration : Math.min(state.minLatency, flowMetrics.duration);
    state.firstFlowStartTime = state.firstFlowStartTime === null ? flowMetrics.startTime : Math.min(state.firstFlowStartTime, flowMetrics.startTime);

    if (configuredWindow && state.order.length > configuredWindow) {
      const staleId = state.order[0];
      removeFlow(staleId);
    }
  }

  function reset() {
    state.totalFlows = 0;
    state.successCount = 0;
    state.failureCount = 0;
    state.totalLatency = 0;
    state.maxLatency = null;
    state.minLatency = null;
    state.totalSpans = 0;
    state.firstFlowStartTime = null;
    state.lastUpdated = null;
    state.flowMap.clear();
    state.order = [];
  }

  function getFlow(flowId) {
    return state.flowMap.get(flowId) || null;
  }

  function getSnapshot() {
    const totalFlows = state.totalFlows;
    const avgLatency = totalFlows > 0 ? state.totalLatency / totalFlows : 0;
    const avgSpansPerFlow = totalFlows > 0 ? state.totalSpans / totalFlows : 0;
    const failureRate = totalFlows > 0 ? state.failureCount / totalFlows : 0;

    let throughputPerMin = 0;
    if (totalFlows > 0 && state.firstFlowStartTime !== null && state.lastUpdated !== null && state.lastUpdated > state.firstFlowStartTime) {
      const minutes = (state.lastUpdated - state.firstFlowStartTime) / 60000;
      throughputPerMin = minutes > 0 ? totalFlows / minutes : 0;
    }

    return {
      totalFlows,
      successCount: state.successCount,
      failureCount: state.failureCount,
      failureRate,
      avgLatency,
      maxLatency: state.maxLatency === null ? 0 : state.maxLatency,
      minLatency: state.minLatency === null ? 0 : state.minLatency,
      totalSpans: state.totalSpans,
      avgSpansPerFlow,
      throughputPerMin,
      lastUpdated: state.lastUpdated
    };
  }

  return { setFlow, getFlow, getSnapshot, reset };
}

module.exports = { createMetricsStore };

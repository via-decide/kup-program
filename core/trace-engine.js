'use strict';

class TraceEngine {
  constructor(options = {}) {
    this.flows = new Map();
    this.onFlowEnd = typeof options.onFlowEnd === 'function' ? options.onFlowEnd : null;
  }

  startFlow(flowId, startTime = Date.now()) {
    const flow = {
      flowId,
      startTime,
      endTime: null,
      status: 'running',
      spans: []
    };
    this.flows.set(flowId, flow);
    return flow;
  }

  addSpan(flowId, span) {
    const flow = this.flows.get(flowId);
    if (!flow) return null;
    flow.spans.push({ ...span });
    return flow;
  }

  endFlow(flowId, endTime = Date.now(), status = 'success') {
    const flow = this.flows.get(flowId);
    if (!flow) return null;
    flow.endTime = endTime;
    flow.status = status;

    const frozenFlow = {
      flowId: flow.flowId,
      startTime: flow.startTime,
      endTime: flow.endTime,
      status: flow.status,
      spans: flow.spans.map((span) => ({ ...span }))
    };

    if (this.onFlowEnd) this.onFlowEnd(frozenFlow);
    return frozenFlow;
  }
}

module.exports = { TraceEngine };

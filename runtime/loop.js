'use strict';

const { createMeasurementEngine } = require('../core/measurement-engine');
const { TraceEngine } = require('../core/trace-engine');

function createRuntimeLoop(options = {}) {
  const measurement = options.measurement || createMeasurementEngine(options.measurementOptions);
  const trace = options.trace || new TraceEngine({ onFlowEnd: measurement.recordFlow });

  const snapshots = [];

  function afterCycle() {
    const snapshot = measurement.getMetrics();
    snapshots.push(snapshot);
    return snapshot;
  }

  return {
    trace,
    measurement,
    afterCycle,
    getSnapshots: () => snapshots.slice()
  };
}

module.exports = { createRuntimeLoop };

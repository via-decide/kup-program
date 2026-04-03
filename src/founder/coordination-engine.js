'use strict';

const { performance } = require('node:perf_hooks');

/**
 * Founder Execution Engine
 *
 * Coordinates task execution across 30 founder threads while preventing
 * state collisions with a distributed lock derived from:
 *   Lock_state = Hash(Thread_ID + Task_ID)
 */
class FounderExecutionEngine {
  constructor(options = {}) {
    this.threadCount = 30;
    this.maxArbitrationLatencyMs = options.maxArbitrationLatencyMs ?? 5;
    this.lockTable = new Map();
    this.taskQueue = [];
    this.threadState = new Map();

    for (let i = 0; i < this.threadCount; i += 1) {
      const threadId = `founder-thread-${i + 1}`;
      this.threadState.set(threadId, {
        activeTaskId: null,
        processed: 0,
        lastArbitrationMs: 0
      });
    }

    console.log('FOUNDER_NETWORK: COORDINATED_EXECUTION_ACTIVE');
  }

  /**
   * FNV-1a 32-bit hash for fast lock derivation.
   * Lock_state = Hash(Thread_ID + Task_ID)
   */
  hashLockState(threadId, taskId) {
    const composite = `${threadId}${taskId}`;
    let hash = 0x811c9dc5;

    for (let i = 0; i < composite.length; i += 1) {
      hash ^= composite.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193);
    }

    return (hash >>> 0).toString(16).padStart(8, '0');
  }

  enqueueTask(task) {
    if (!task || typeof task.id === 'undefined') {
      throw new Error('Task must be an object with an id field.');
    }

    this.taskQueue.push(task);
  }

  enqueueTasks(tasks = []) {
    for (const task of tasks) {
      this.enqueueTask(task);
    }
  }

  acquireLock(threadId, taskId) {
    const started = performance.now();
    const lockState = this.hashLockState(threadId, taskId);

    if (this.lockTable.has(lockState)) {
      return {
        acquired: false,
        lockState,
        arbitrationMs: performance.now() - started
      };
    }

    this.lockTable.set(lockState, {
      threadId,
      taskId,
      acquiredAt: Date.now()
    });

    return {
      acquired: true,
      lockState,
      arbitrationMs: performance.now() - started
    };
  }

  releaseLock(lockState) {
    this.lockTable.delete(lockState);
  }

  async processTask(threadId, task) {
    const arbitration = this.acquireLock(threadId, task.id);

    if (!arbitration.acquired) {
      return {
        status: 'deferred',
        reason: 'lock-contention',
        threadId,
        taskId: task.id,
        arbitrationMs: arbitration.arbitrationMs
      };
    }

    const state = this.threadState.get(threadId);
    state.activeTaskId = task.id;
    state.lastArbitrationMs = arbitration.arbitrationMs;

    if (arbitration.arbitrationMs > this.maxArbitrationLatencyMs) {
      console.warn(
        `[FounderExecutionEngine] Arbitration latency ${arbitration.arbitrationMs.toFixed(3)}ms exceeded ${this.maxArbitrationLatencyMs}ms`
      );
    }

    try {
      const result = typeof task.execute === 'function'
        ? await task.execute({ threadId, taskId: task.id, lockState: arbitration.lockState })
        : task.payload ?? null;

      state.processed += 1;

      return {
        status: 'completed',
        threadId,
        taskId: task.id,
        lockState: arbitration.lockState,
        arbitrationMs: arbitration.arbitrationMs,
        result
      };
    } finally {
      state.activeTaskId = null;
      this.releaseLock(arbitration.lockState);
    }
  }

  async runCycle() {
    if (this.taskQueue.length === 0) {
      return [];
    }

    const threadIds = [...this.threadState.keys()];
    const assignments = [];

    for (const threadId of threadIds) {
      if (this.taskQueue.length === 0) {
        break;
      }

      const state = this.threadState.get(threadId);
      if (state.activeTaskId !== null) {
        continue;
      }

      const task = this.taskQueue.shift();
      assignments.push(this.processTask(threadId, task));
    }

    return Promise.all(assignments);
  }

  getTelemetry() {
    const perThread = [...this.threadState.entries()].map(([threadId, state]) => ({
      threadId,
      activeTaskId: state.activeTaskId,
      processed: state.processed,
      lastArbitrationMs: Number(state.lastArbitrationMs.toFixed(4))
    }));

    return {
      threadCount: this.threadCount,
      queueDepth: this.taskQueue.length,
      heldLocks: this.lockTable.size,
      maxArbitrationLatencyMs: this.maxArbitrationLatencyMs,
      perThread
    };
  }
}

module.exports = {
  FounderExecutionEngine
};

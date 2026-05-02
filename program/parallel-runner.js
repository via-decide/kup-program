'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { runKupLoop } = require('./run-kup-loop');
const { generateBatchReport } = require('./report-generator');

const EXPERIMENTS_DIR = path.resolve(__dirname, '../../kup-research/experiments');
const DEFAULT_CONCURRENCY = 3;

async function runWithLimit(items, worker, concurrency = DEFAULT_CONCURRENCY) {
  const limit = Number.isInteger(concurrency) && concurrency > 0 ? concurrency : DEFAULT_CONCURRENCY;
  const results = new Array(items.length);
  let nextIndex = 0;

  async function runWorker() {
    while (true) {
      const currentIndex = nextIndex;
      nextIndex += 1;

      if (currentIndex >= items.length) {
        return;
      }

      results[currentIndex] = await worker(items[currentIndex], currentIndex);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () => runWorker());
  await Promise.all(workers);
  return results;
}

async function runParallelBatch(folder = EXPERIMENTS_DIR, concurrency = DEFAULT_CONCURRENCY) {
  const entries = await fs.readdir(folder, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort();

  const outcomes = await runWithLimit(
    files,
    (fileName) => runKupLoop(path.join(folder, fileName)),
    concurrency
  );

  const failures = outcomes
    .filter((outcome) => outcome.status !== 'success')
    .map((outcome) => ({
      id: outcome.id,
      type: outcome.error.type
    }));

  const summary = {
    total: files.length,
    success: outcomes.filter((r) => r.status === 'success').length,
    failed: outcomes.filter((r) => r.status === 'failed').length,
    results: outcomes,
    failures
  };

  await generateBatchReport(summary);
  return summary;
}

if (require.main === module) {
  const concurrencyArg = Number.parseInt(process.argv[2], 10);
  const concurrency = Number.isNaN(concurrencyArg) ? DEFAULT_CONCURRENCY : concurrencyArg;

  runParallelBatch(EXPERIMENTS_DIR, concurrency)
    .then((summary) => console.log(JSON.stringify(summary, null, 2)))
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    });
}

module.exports = {
  EXPERIMENTS_DIR,
  DEFAULT_CONCURRENCY,
  runWithLimit,
  runParallelBatch
};

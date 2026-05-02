'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { runKupLoop } = require('./run-kup-loop');
const { generateBatchReport } = require('./report-generator');
const { runParallelBatch, DEFAULT_CONCURRENCY } = require('./parallel-runner');

const EXPERIMENTS_DIR = path.resolve(__dirname, '../../kup-research/experiments');

async function runBatch(folder = EXPERIMENTS_DIR) {
  const entries = await fs.readdir(folder, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort();

  const results = [];
  const failures = [];

  for (const fileName of files) {
    const outcome = await runKupLoop(path.join(folder, fileName));

    if (outcome.status === 'success') {
      results.push(outcome);
    } else {
      failures.push({
        id: outcome.id,
        type: outcome.error.type
      });
      results.push(outcome);
    }
  }

  const summary = {
    total: files.length,
    success: results.filter((r) => r.status === 'success').length,
    failed: results.filter((r) => r.status === 'failed').length,
    results,
    failures
  };

  await generateBatchReport(summary);
  return summary;
}

if (require.main === module) {
  const mode = process.argv[2] === '--parallel' ? 'parallel' : 'sequential';
  const concurrencyArg = Number.parseInt(process.argv[3], 10);
  const concurrency = Number.isNaN(concurrencyArg) ? DEFAULT_CONCURRENCY : concurrencyArg;

  const runner = mode === 'parallel'
    ? runParallelBatch(EXPERIMENTS_DIR, concurrency)
    : runBatch();

  runner
    .then((summary) => console.log(JSON.stringify(summary, null, 2)))
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    });
}

module.exports = {
  EXPERIMENTS_DIR,
  runBatch
};

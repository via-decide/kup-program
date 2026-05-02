'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');

const BATCH_REPORT_PATH = path.resolve(__dirname, '../../kup-research/results/batch-report.json');

async function generateBatchReport(summary) {
  await fs.mkdir(path.dirname(BATCH_REPORT_PATH), { recursive: true });
  await fs.writeFile(BATCH_REPORT_PATH, JSON.stringify(summary, null, 2));
  return BATCH_REPORT_PATH;
}

module.exports = {
  BATCH_REPORT_PATH,
  generateBatchReport
};

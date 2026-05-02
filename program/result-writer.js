'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');

const RESULTS_DIR = path.resolve(__dirname, '../../kup-research/results');

async function writeResult({ id, result, flowId }) {
  const output = {
    id,
    result,
    metrics: {
      status: 'success'
    },
    flowId
  };

  await fs.mkdir(RESULTS_DIR, { recursive: true });
  const outputPath = path.join(RESULTS_DIR, `${id}.json`);
  await fs.writeFile(outputPath, JSON.stringify(output, null, 2));

  return outputPath;
}

module.exports = {
  writeResult,
  RESULTS_DIR
};

'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { HYPOTHESIS_PATH } = require('./hypothesis-generator');

const EXPERIMENTS_DIR = path.resolve(__dirname, '../../kup-research/experiments');

function toExperimentMarkdown(hypothesis) {
  return [
    `id: ${hypothesis.id}`,
    `agent: ${hypothesis.agent}`,
    '',
    'hypothesis:',
    `${hypothesis.hypothesis}`,
    '',
    'input:',
    `${JSON.stringify(hypothesis.input, null, 2)}`,
    '',
    'expected:',
    `${JSON.stringify(hypothesis.expected, null, 2)}`,
    ''
  ].join('\n');
}

async function writeExperimentsFromHypotheses(hypothesisPath = HYPOTHESIS_PATH, outputDir = EXPERIMENTS_DIR) {
  const content = await fs.readFile(hypothesisPath, 'utf8');
  const hypotheses = JSON.parse(content);

  await fs.mkdir(outputDir, { recursive: true });

  const outputPaths = [];
  for (const hypothesis of hypotheses) {
    const filePath = path.join(outputDir, `${hypothesis.id}.md`);
    await fs.writeFile(filePath, toExperimentMarkdown(hypothesis));
    outputPaths.push(filePath);
  }

  return outputPaths;
}

if (require.main === module) {
  writeExperimentsFromHypotheses()
    .then((paths) => console.log(JSON.stringify(paths, null, 2)))
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    });
}

module.exports = {
  EXPERIMENTS_DIR,
  toExperimentMarkdown,
  writeExperimentsFromHypotheses
};

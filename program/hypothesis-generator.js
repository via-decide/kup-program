'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { ANALYSIS_PATH } = require('./analysis-engine');

const HYPOTHESIS_PATH = path.resolve(__dirname, '../../kup-research/results/hypotheses.json');

function buildHypotheses(analysis) {
  const hypotheses = [];

  if (analysis && typeof analysis.failureRate === 'number' && analysis.failureRate > 0) {
    hypotheses.push({
      id: 'exp-failure-recovery',
      hypothesis: `Targeting the dominant failure cluster should reduce failure rate from ${analysis.failureRate}.`,
      agent: analysis.best && analysis.best.agent ? analysis.best.agent : 'unknown-agent',
      input: {
        strategy: 'failure-cluster-mitigation',
        sourcePatterns: analysis.patterns.filter((item) => item.startsWith('Failed clusters by type'))
      },
      expected: {
        failureRateLessThan: analysis.failureRate
      }
    });
  }

  if (analysis && analysis.best && analysis.worst && typeof analysis.averageLatency === 'number') {
    hypotheses.push({
      id: 'exp-latency-optimization',
      hypothesis: `Applying the best-run configuration to slower runs should reduce average latency below ${analysis.averageLatency}ms.`,
      agent: analysis.best.agent || 'unknown-agent',
      input: {
        baselineBestExperiment: analysis.best.id,
        baselineWorstExperiment: analysis.worst.id
      },
      expected: {
        averageLatencyLessThan: analysis.averageLatency
      }
    });
  }

  return hypotheses;
}

async function generateHypotheses(analysisPath = ANALYSIS_PATH, outputPath = HYPOTHESIS_PATH) {
  const content = await fs.readFile(analysisPath, 'utf8');
  const analysis = JSON.parse(content);
  const hypotheses = buildHypotheses(analysis);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(hypotheses, null, 2));
  return hypotheses;
}

if (require.main === module) {
  generateHypotheses()
    .then((hypotheses) => console.log(JSON.stringify(hypotheses, null, 2)))
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    });
}

module.exports = {
  HYPOTHESIS_PATH,
  buildHypotheses,
  generateHypotheses
};

'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { RESULTS_DIR } = require('./result-writer');

const ANALYSIS_PATH = path.resolve(__dirname, '../../kup-research/results/analysis.json');

function toNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }
  return null;
}

function getLatency(result) {
  if (!result || typeof result !== 'object') {
    return null;
  }

  const latencyCandidates = [
    result.metrics && result.metrics.latencyMs,
    result.metrics && result.metrics.latency,
    result.result && result.result.latencyMs,
    result.result && result.result.latency,
    result.result && result.result.metrics && result.result.metrics.latencyMs,
    result.result && result.result.metrics && result.result.metrics.latency
  ];

  for (const candidate of latencyCandidates) {
    const parsed = toNumber(candidate);
    if (parsed !== null) {
      return parsed;
    }
  }

  return null;
}

async function loadResultFiles(resultsFolder = RESULTS_DIR) {
  const entries = await fs.readdir(resultsFolder, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'analysis.json' && entry.name !== 'batch-report.json')
    .map((entry) => entry.name)
    .sort();

  const loaded = await Promise.all(files.map(async (name) => {
    const fullPath = path.join(resultsFolder, name);
    const text = await fs.readFile(fullPath, 'utf8');
    return JSON.parse(text);
  }));

  return loaded;
}

function buildAnalysis(results) {
  const total = results.length;
  const failures = results.filter((record) => record && record.metrics && record.metrics.status === 'failed');

  const withLatency = results
    .map((record) => ({ id: record.id, latency: getLatency(record), record }))
    .filter((item) => item.latency !== null);

  const sortedLatency = [...withLatency].sort((a, b) => a.latency - b.latency);
  const best = sortedLatency.length > 0 ? sortedLatency[0].record : null;
  const worst = sortedLatency.length > 0 ? sortedLatency[sortedLatency.length - 1].record : null;
  const averageLatency = sortedLatency.length > 0
    ? Number((sortedLatency.reduce((acc, item) => acc + item.latency, 0) / sortedLatency.length).toFixed(2))
    : 0;
  const failureRate = total > 0 ? Number((failures.length / total).toFixed(4)) : 0;

  const patterns = [];

  if (best) {
    patterns.push(`Best performing experiment: ${best.id}`);
  }

  if (failures.length > 0) {
    const groupedByType = failures.reduce((acc, record) => {
      const type = record.error && record.error.type ? record.error.type : 'UNKNOWN';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const failureSummary = Object.entries(groupedByType)
      .map(([type, count]) => `${type}:${count}`)
      .join(', ');
    patterns.push(`Failed clusters by type: ${failureSummary}`);
  }

  if (sortedLatency.length > 0) {
    const fastest = sortedLatency[0].latency;
    const slowest = sortedLatency[sortedLatency.length - 1].latency;
    patterns.push(`Latency distribution range(ms): ${fastest}..${slowest}`);
  }

  return {
    best,
    worst,
    averageLatency,
    failureRate,
    patterns
  };
}

async function runAnalysis(resultsFolder = RESULTS_DIR, outputPath = ANALYSIS_PATH) {
  const results = await loadResultFiles(resultsFolder);
  const analysis = buildAnalysis(results);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(analysis, null, 2));
  return analysis;
}

if (require.main === module) {
  runAnalysis()
    .then((analysis) => console.log(JSON.stringify(analysis, null, 2)))
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    });
}

module.exports = {
  ANALYSIS_PATH,
  getLatency,
  loadResultFiles,
  buildAnalysis,
  runAnalysis
};

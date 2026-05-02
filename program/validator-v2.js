'use strict';

const { EXPERIMENT_SCHEMA_FIELDS } = require('./schema');

function parseExperimentMarkdownStrict(markdown) {
  if (typeof markdown !== 'string' || markdown.trim() === '') {
    return { valid: false, errors: ['Experiment file is empty or not text.'] };
  }

  const trimmed = markdown.trim();
  const fencedMatch = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
  const candidate = fencedMatch ? fencedMatch[1] : trimmed;

  try {
    return { valid: true, parsed: JSON.parse(candidate), errors: [] };
  } catch {
    return { valid: false, errors: ['Experiment content is not valid JSON.'] };
  }
}

function validateExperimentV2(experiment) {
  const errors = [];

  if (!experiment || typeof experiment !== 'object' || Array.isArray(experiment)) {
    return { valid: false, errors: ['Experiment must be a JSON object.'] };
  }

  if (typeof experiment.id !== EXPERIMENT_SCHEMA_FIELDS.id || experiment.id.trim() === '') {
    errors.push('Field "id" is required and must be a non-empty string.');
  }

  if (typeof experiment.agent !== EXPERIMENT_SCHEMA_FIELDS.agent || experiment.agent.trim() === '') {
    errors.push('Field "agent" is required and must be a non-empty string.');
  }

  if (!experiment.input || typeof experiment.input !== EXPERIMENT_SCHEMA_FIELDS.input || Array.isArray(experiment.input)) {
    errors.push('Field "input" is required and must be a JSON object.');
  }

  if ('expected' in experiment && (typeof experiment.expected !== EXPERIMENT_SCHEMA_FIELDS.expected || Array.isArray(experiment.expected) || experiment.expected === null)) {
    errors.push('Field "expected" must be a JSON object when provided.');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

module.exports = {
  parseExperimentMarkdownStrict,
  validateExperimentV2
};

'use strict';

const PIPELINE_ERROR = 'FAIL_EXPERIMENT_PIPELINE';

function validateExperiment(experiment) {
  const requiredFields = ['id', 'agent', 'input'];

  if (!experiment || typeof experiment !== 'object') {
    throw new Error(PIPELINE_ERROR);
  }

  for (const field of requiredFields) {
    if (!(field in experiment) || experiment[field] === undefined || experiment[field] === null || experiment[field] === '') {
      throw new Error(PIPELINE_ERROR);
    }
  }

  return experiment;
}

module.exports = {
  PIPELINE_ERROR,
  validateExperiment
};

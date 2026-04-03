Branch: simba/create-the-weekly-sync-reporter-in-srcopsfriday-
Title: Create the 'Weekly Sync Reporter' in src/ops/friday-sync.js. Aggregat...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Create the 'Weekly Sync Reporter' in src/ops/friday-sync.js. Aggregate the following: 1) Total 'Scenario 2' recoveries, 2) Median Founder Energy, 3) Revenue/Grant prospects logged, and 4) Jetson-Inference Benchmarks.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
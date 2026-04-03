Branch: simba/implement-the-weekly-sync-reporter-in-srcopssync
Title: Implement the 'Weekly Sync Reporter' in src/ops/sync-gen.js. Every Th...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Weekly Sync Reporter' in src/ops/sync-gen.js. Every Thursday at 6:00 PM, this module must aggregate: 1) Total vehicle passages processed, 2) Current model accuracy vs. Temperature drift, 3) Average founder energy levels, and 4) Revenue collected via Hanuman.Solutions.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
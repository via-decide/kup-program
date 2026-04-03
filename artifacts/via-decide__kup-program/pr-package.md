Branch: simba/implement-the-failure-ceiling-audit-in-srcopspiv
Title: Implement the 'Failure Ceiling Audit' in src/ops/pivot-logic.js. Aggr...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Failure Ceiling Audit' in src/ops/pivot-logic.js. Aggregate the last 48 hours of founder energy logs.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
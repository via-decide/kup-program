Branch: simba/build-the-scope-lock-validator-in-srcopspr-valid
Title: Build the 'Scope-Lock Validator' in src/ops/pr-validator.js. Create a...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Scope-Lock Validator' in src/ops/pr-validator.js. Create a GitHub Action that automatically reviews Week 1 PRs. It must check for: 1) A finalized 'Reference Architecture', 2) A defined 'Scenario 2' failure metric, and 3) A 'Decision Budget' audit for the week.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
Branch: simba/execute-the-production-hardening-script-in-srcop
Title: Execute the 'Production-Hardening' script in src/ops/finalize-release...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Execute the 'Production-Hardening' script in src/ops/finalize-release.js. Strip debug logs, minify edge assets, and generate the 'Sovereign v1.0' API documentation.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
Branch: simba/create-the-compliance-sentinel-in-srcopsnhai-han
Title: Create the 'Compliance-Sentinel' in src/ops/nhai-handover.js. Automat...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Create the 'Compliance-Sentinel' in src/ops/nhai-handover.js. Automatically aggregate the 'Hysteresis' logs and 'Thermal-Expansion' math into a formal PDF report.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
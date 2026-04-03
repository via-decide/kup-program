Branch: simba/implement-the-ip-vault-generator-in-srcopsgradua
Title: Implement the 'IP Vault Generator' in src/ops/graduation-vault.js. Fo...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'IP Vault Generator' in src/ops/graduation-vault.js. For every founder who achieved an F1-score > 0.92, package: 1) Their fine-tuned Vora weights, 2) Their 'Scenario 2' recovery logs, and 3) A cryptographically signed 'Sovereign Lab Certificate.'

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
Branch: simba/build-the-graduation-packager-in-srcopsvault-gen
Title: Build the 'Graduation Packager' in src/ops/vault-gen.js. For every fo...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Graduation Packager' in src/ops/vault-gen.js. For every founder with an $F_1$-score $> 0.92$, generate a secure ZIP containing their fine-tuned model weights, their 1M passage shards, and their B2B dashboard alpha.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
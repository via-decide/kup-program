Branch: simba/create-the-grand-pilot-auditor-in-srcopsfinal-au
Title: Create the 'Grand Pilot Auditor' in src/ops/final-audit.js. Score eac...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Create the 'Grand Pilot Auditor' in src/ops/final-audit.js. Score each of the 30 founders based on: 1) $F_1$-Score in S2 Heat, 2) Token Efficiency (Goal: >90%), and 3) Decision Budget Discipline.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
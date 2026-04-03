Branch: simba/create-the-graduation-handover-service-in-srcops
Title: Create the 'Graduation Handover' service in src/ops/graduation.js. Fo...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Create the 'Graduation Handover' service in src/ops/graduation.js. For every founder who passes the 'Milestone Gates', generate a "Sovereign IP Pack" containing: 1) Their fine-tuned Vora model weights, 2) Their 1-km site topology, and 3) Their drafted Research/Grant proposals.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
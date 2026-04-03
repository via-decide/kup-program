Branch: simba/create-the-sprint-master-agent-template-in-srcte
Title: Create 'The Sprint Master' Agent Template in src/templates/sprint-mas...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Create 'The Sprint Master' Agent Template in src/templates/sprint-master.json. Configure the system prompt to enforce the 4-week "Ruthless Sprint" timeline and manage founder decision budgets.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
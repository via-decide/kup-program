Branch: simba/implement-the-founder-onboarding-flow-in-srcauth
Title: Implement the 'Founder Onboarding' flow in src/auth/onboarding.js. Cr...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Founder Onboarding' flow in src/auth/onboarding.js. Create a CLI or simple web form where founders register their GitHub ID and select their intended 'Outcome Path'. Upon registration, the system must issue a 'KUP_FOUNDER' JWT and create a entry in the local SQLite database.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
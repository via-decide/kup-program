Branch: simba/implement-the-decision-auditor-in-srcanalyticsde
Title: Implement the 'Decision Auditor' in src/analytics/decision-audit.js. ...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Decision Auditor' in src/analytics/decision-audit.js. This module aggregates the 'Decision Budget' logs from all founders to identify which tasks caused the most "Context Rot" or mental fatigue.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
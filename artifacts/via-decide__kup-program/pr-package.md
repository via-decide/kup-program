Branch: simba/build-the-week-1-dispatcher-in-srcnotificationss
Title: Build the 'Week 1 Dispatcher' in src/notifications/sprint-cards-w1.js...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Week 1 Dispatcher' in src/notifications/sprint-cards-w1.js. Program the bot to send the following cards: 1) "Lock Project Scope", 2) "Initialize Digital Twin", and 3) "Draft Brand Positioning". [span_8](start_span)constraints: Each card must include a 'Decision Budget' count of 1. If a founder tries to take on more tasks, the 'Sprint Master' agent must intervene to prevent burnout[span_8](end_span).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
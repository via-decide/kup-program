Branch: simba/implement-the-daily-standup-bot-in-srcopsstandup
Title: Implement the 'Daily Standup Bot' in src/ops/standup-bot.js. This bot...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Daily Standup Bot' in src/ops/standup-bot.js. This bot must ping each founder every morning on Telegram. It should ask: 1) What was your "Decision Budget" spend yesterday? 2) What is your "Scenario 2" blocker? [span_3](start_span)3) What is your Energy Level (1-10)?[span_3](end_span)

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
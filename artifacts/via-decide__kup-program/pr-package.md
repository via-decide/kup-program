Branch: simba/build-the-morale-engine-in-srcopsspirit-botjs-ba
Title: Build the 'Morale Engine' in src/ops/spirit-bot.js. Based on the 'KUP...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Morale Engine' in src/ops/spirit-bot.js. Based on the 'KUP-Pulse' energy levels, the bot should send automated, path-specific encouragement. If a Research Path founder gets a "Paper Rejected" simulation, the bot should provide a "Sovereign Pivot" pep talk.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
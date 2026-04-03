Branch: simba/implement-the-kup-pulse-collector-in-srcopspulse
Title: Implement the 'KUP-Pulse' collector in src/ops/pulse-monitor.js. Crea...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'KUP-Pulse' collector in src/ops/pulse-monitor.js. Create a Telegram-integrated check-in that asks founders for: 1) Mental Energy (1-10), 2) Physical Energy (1-10), and 3) Decisions Made Today.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
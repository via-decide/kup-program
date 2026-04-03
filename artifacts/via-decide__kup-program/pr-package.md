Branch: simba/build-the-shadow-bill-dispatcher-in-srcopsshadow
Title: Build the 'Shadow-Bill Dispatcher' in src/ops/shadow-billing.js. At 9...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Shadow-Bill Dispatcher' in src/ops/shadow-billing.js. At 9:00 PM IST daily, calculate the total tokens used by each founder and multiply by the standard Zayvora rate. Send a Telegram message: "Today's Compute Value: ₹[X]. Your Cost: ₹0. (Don't waste the mission's energy)."

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
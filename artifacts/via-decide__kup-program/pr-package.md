Branch: simba/build-the-founder-pulse-module-in-srcopsenergy-t
Title: Build the 'Founder Pulse' module in src/ops/energy-tracker.js. [span_...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Founder Pulse' module in src/ops/energy-tracker.js. [span_4](start_span)Integrate with the Telegram bot to send a daily 30-second check-in asking founders to rate their Mental, Physical, and Emotional energy[span_4](end_span). [span_5](start_span)constraints: If a team's average energy drops below 30%, the 'Sprint Master' agent must automatically trigger a "Failure Ceiling" alert, suggesting a mandatory scope reduction or a 12-hour rest period[span_5](end_span). [span_6](start_span)Limit "Decision Cards" to 3 high-impact choices per founder per week to prevent fatigue[span_6](end_span).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
Branch: simba/build-the-failure-ceiling-trigger-in-srcopspivot
Title: Build the 'Failure Ceiling Trigger' in src/ops/pivot-logic.js. Develo...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Failure Ceiling Trigger' in src/ops/pivot-logic.js. Develop a system that monitors 'Task Card' completion rates. [span_11](start_span)[span_12](start_span)If a founder misses three consecutive "Week 3: Scenario 2" recovery milestones, the system must trigger a "Pivot Suggestion"[span_11](end_span)[span_12](end_span). [span_13](start_span)[span_14](start_span)constraints: The 'Sprint Master' agent should then provide 3 pre-vetted scope-reduction options (e.g., reducing the number of simulated lanes) to ensure the Week 4 MVP is still reachable[span_13](end_span)[span_14](end_span).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
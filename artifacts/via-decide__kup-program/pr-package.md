Branch: simba/implement-the-pivot-trigger-monitor-in-srcopspiv
Title: Implement the 'Pivot Trigger Monitor' in src/ops/pivot-monitor.js. [s...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Pivot Trigger Monitor' in src/ops/pivot-monitor.js. [span_24](start_span)[span_25](start_span)This service tracks a team's progress against the "Week 3 Friday" Scenario 2 recovery.[span_24](end_span)[span_25](end_span) [span_26](start_span)If accuracy remains below 80% for 48 hours, it must trigger a "Permission to Pivot" alert to the founder.[span_26](end_span) [span_27](start_span)[span_28](start_span)constraints: The 'Sprint Master' agent must provide three pre-vetted scope-reduction options to the team to ensure they still reach a Month 1 MVP.[span_27](end_span)[span_28](end_span)

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
Branch: simba/implement-the-energy-analytics-dashboard-in-srco
Title: Implement the 'Energy Analytics Dashboard' in src/ops/energy-dashboar...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Energy Analytics Dashboard' in src/ops/energy-dashboard.js. [span_6](start_span)Create a visualization that aggregates daily founder check-ins across three dimensions: Mental, Physical, and Emotional energy[span_6](end_span). [span_7](start_span)[span_8](start_span)constraints: If any team's aggregate score drops below the 30% threshold, the 'Sprint Master' must flag the team for immediate mentor intervention[span_7](end_span)[span_8](end_span). Use the Sovereign theme for high-signal reporting.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
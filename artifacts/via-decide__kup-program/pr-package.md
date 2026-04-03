Branch: simba/build-the-high-signal-kpi-dashboard-in-srcopsdas
Title: Build the 'High-Signal KPI Dashboard' in src/ops/dashboard-viz.js. [s...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'High-Signal KPI Dashboard' in src/ops/dashboard-viz.js. [span_6](start_span)This dashboard must track: 1) Total simulated vehicle passages (Target: 1M), 2) Average model accuracy across all 30 founders (Target: >80%), and 3) Research citations/Hugging Face downloads [cite: 16-17, 21].

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
Branch: simba/implement-the-mentor-router-in-srcopsmentor-link
Title: Implement the 'Mentor Router' in src/ops/mentor-link.js. Create a log...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Mentor Router' in src/ops/mentor-link.js. Create a logic gate that flags specific founder queries in the playground for mentor review based on their Path (Infrastructure, Research, or Edge Platform). [span_11](start_span)constraints: Limit mentor-to-founder interaction to the "1 hour/week" boundary specified in the framework to prevent mentor burnout[span_11](end_span). Use the Sovereign theme to log "MENTOR SIGNAL REQUESTED: [PATH]".

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
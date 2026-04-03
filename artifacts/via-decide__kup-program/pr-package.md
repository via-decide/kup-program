Branch: simba/create-the-mentor-dispatcher-in-srcopsmentor-syn
Title: Create the 'Mentor Dispatcher' in src/ops/mentor-sync.js. Route speci...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Create the 'Mentor Dispatcher' in src/ops/mentor-sync.js. Route specific "Path-2 Research" queries to the Academic Mentor and "Path-1 Infrastructure" queries to the Systems Mentor.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
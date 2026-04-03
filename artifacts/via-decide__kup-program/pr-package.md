Branch: simba/implement-the-task-dispatcher-in-srcnotification
Title: Implement the 'Task Dispatcher' in src/notifications/telegram-manager...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Implement the 'Task Dispatcher' in src/notifications/telegram-manager.js. Connect the backend to a Telegram Bot API. [span_7](start_span)[span_8](start_span)Create a function that sends "Week 1-4 Task Cards" to founders based on their outcome path (Infrastructure, Research, or Edge Platform)[span_7](end_span)[span_8](end_span).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Build the 'Week 1 Dispatcher' in src/notifications/sprint-cards-w1.js. Program the bot to send the following cards: 1) "Lock Project Scope", 2) "Initialize Digital Twin", and 3) "Draft Brand Positioning". [span_8](start_span)constraints: Each card must include a 'Decision Budget' count of 1. If a founder tries to take on more tasks, the 'Sprint Master' agent must intervene to prevent burnout[span_8](end_span).

RULES
1. Audit touched files first and identify regressions.
2. Preserve architecture and naming conventions.
3. Make minimal repairs only; do not expand scope.
4. Re-run checks and provide concise root-cause notes.
5. Return complete contents for changed files only.

SOP: REPAIR PROTOCOL (MANDATORY)
1. Strict Fix Only: Do not use repair mode to expand scope or add features.
2. Regression Check: Audit why previous attempt failed before proposing a fix.
3. Minimal Footprint: Only return contents for the actual repaired files.

REPO CONTEXT
- README snippet:
# kup-program
- AGENTS snippet:
not found
- package.json snippet:
not found
Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Build the 'Founder Pulse' module in src/ops/energy-tracker.js. [span_4](start_span)Integrate with the Telegram bot to send a daily 30-second check-in asking founders to rate their Mental, Physical, and Emotional energy[span_4](end_span). [span_5](start_span)constraints: If a team's average energy drops below 30%, the 'Sprint Master' agent must automatically trigger a "Failure Ceiling" alert, suggesting a mandatory scope reduction or a 12-hour rest period[span_5](end_span). [span_6](start_span)Limit "Decision Cards" to 3 high-impact choices per founder per week to prevent fatigue[span_6](end_span).

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
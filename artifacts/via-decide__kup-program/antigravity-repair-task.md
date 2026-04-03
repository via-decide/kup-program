Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement the 'Pivot Trigger Monitor' in src/ops/pivot-monitor.js. [span_24](start_span)[span_25](start_span)This service tracks a team's progress against the "Week 3 Friday" Scenario 2 recovery.[span_24](end_span)[span_25](end_span) [span_26](start_span)If accuracy remains below 80% for 48 hours, it must trigger a "Permission to Pivot" alert to the founder.[span_26](end_span) [span_27](start_span)[span_28](start_span)constraints: The 'Sprint Master' agent must provide three pre-vetted scope-reduction options to the team to ensure they still reach a Month 1 MVP.[span_27](end_span)[span_28](end_span)

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
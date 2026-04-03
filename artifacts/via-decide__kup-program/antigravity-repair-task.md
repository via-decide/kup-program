Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement the 'Energy Analytics Dashboard' in src/ops/energy-dashboard.js. [span_6](start_span)Create a visualization that aggregates daily founder check-ins across three dimensions: Mental, Physical, and Emotional energy[span_6](end_span). [span_7](start_span)[span_8](start_span)constraints: If any team's aggregate score drops below the 30% threshold, the 'Sprint Master' must flag the team for immediate mentor intervention[span_7](end_span)[span_8](end_span). Use the Sovereign theme for high-signal reporting.

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
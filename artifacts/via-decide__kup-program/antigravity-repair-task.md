Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement the 'Mentor Router' in src/ops/mentor-link.js. Create a logic gate that flags specific founder queries in the playground for mentor review based on their Path (Infrastructure, Research, or Edge Platform). [span_11](start_span)constraints: Limit mentor-to-founder interaction to the "1 hour/week" boundary specified in the framework to prevent mentor burnout[span_11](end_span). Use the Sovereign theme to log "MENTOR SIGNAL REQUESTED: [PATH]".

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
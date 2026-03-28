Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Design the "Energy Management Framework" for Month 1. Create a weekly calendar view: for each day Mon-Fri, allocate mental/physical/emotional energy slots. Monday morning = high mental (decisions, architecture). Monday evening = low (admin). Tuesday-Wednesday = physical (coding, hardware). Thursday = emotional (stakeholder calls). Friday = recovery. For each role (data engineer, backend, business, domain), customize the energy allocation. Create a "burnout early warning" checklist: if founder hitting >2 high-energy days in a row, program lead checks in. Build in mandatory breaks: 15-min breaks every 90 min, 1-hour lunch, no Slack after 7 PM.

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
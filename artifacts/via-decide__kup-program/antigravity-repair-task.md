Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Build the 'Founder Onboarding Packet' generator in src/docs/welcome-packet.js. [cite_start]This script must generate a personalized PDF for each founder that outlines: 1) Their assigned 'Outcome Path', 2) Their 'Decision Budget' (3 choices/week), and 3) The 'Failure Ceiling' pivot rules. [cite: 18, 28-29]

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
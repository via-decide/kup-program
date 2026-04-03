Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Build the 'Ecosystem Manifest Generator' in src/dist/daxini-manifest.js. This script must crawl your src/templates/ folder and generate a standardized metadata file for Daxini.Space. [span_8](start_span)constraints: Each "App" must include a direct link to the LogicHub deployment layer[span_8](end_span). Ensure the manifest includes the "0-Token KUP Founder" bypass logic so the 30 founders can access these tools through the storefront for free.

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
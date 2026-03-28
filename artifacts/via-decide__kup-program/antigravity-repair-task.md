Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Create the mentor assignment + rotation framework. Identify 3 mentor roles: (a) Technical Lead (edge ML, Jetson), (b) Business Lead (NHAI, partnerships), (c) Domain Expert (highway systems, sensor physics). For each role, define: domain, weekly time budget (1 hour), response time SLA (24 hrs async or scheduled call). Create Telegram bot integration: founders DM mentor with question, response tracked, escalations logged. Define escalation criteria: if response time exceeded 2×, escalate to program lead. Collect mentor feedback weekly: "Did founders ask smart questions? Were sessions high-signal?" Mentor template should include: - Name & expertise - Weekly availability window - Preferred contact method - Three example questions they're prepared to answer - Off-limits topics (hand-holding vs. strategy)

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
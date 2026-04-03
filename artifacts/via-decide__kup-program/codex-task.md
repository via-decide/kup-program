You are working in repository via-decide/kup-program on branch main.

MISSION
Build the 'Founder Pulse' module in src/ops/energy-tracker.js. [span_4](start_span)Integrate with the Telegram bot to send a daily 30-second check-in asking founders to rate their Mental, Physical, and Emotional energy[span_4](end_span). [span_5](start_span)constraints: If a team's average energy drops below 30%, the 'Sprint Master' agent must automatically trigger a "Failure Ceiling" alert, suggesting a mandatory scope reduction or a 12-hour rest period[span_5](end_span). [span_6](start_span)Limit "Decision Cards" to 3 high-impact choices per founder per week to prevent fatigue[span_6](end_span).

CONSTRAINTS
Preserve existing code; prefer additive changes.

PROCESS (MANDATORY)
1. Read README.md and AGENTS.md before editing.
2. Audit architecture before coding. Summarize current behavior.
3. Preserve unrelated working code. Prefer additive modular changes.
4. Implement the smallest safe change set for the stated goal.
5. Run validation commands and fix discovered issues.
6. Self-review for regressions, missing env wiring, and docs drift.
7. Return complete final file contents for every modified or created file.

REPO AUDIT CONTEXT
- Description: 
- Primary language: unknown
- README snippet:
# kup-program

- AGENTS snippet:
not found


SOP: PRE-MODIFICATION PROTOCOL (MANDATORY)
1. Adherence to Instructions: No deviations without explicit user approval.
2. Mandatory Clarification: Immediately ask if instructions are ambiguous or incomplete.
3. Proposal First: Always propose optimizations or fixes before implementing them.
4. Scope Discipline: Do not add unrequested features or modify unrelated code.
5. Vulnerability Check: Immediately flag and explain security risks.

OUTPUT REQUIREMENTS
- Include: implementation summary, checks run, risks, rollback notes.
- Generate branch + PR package.
- Keep prompts deterministic and preservation-first.
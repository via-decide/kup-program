You are working in repository via-decide/kup-program on branch main.

MISSION
Implement the 'Daily Standup Bot' in src/ops/standup-bot.js. This bot must ping each founder every morning on Telegram. It should ask: 1) What was your "Decision Budget" spend yesterday? 2) What is your "Scenario 2" blocker? [span_3](start_span)3) What is your Energy Level (1-10)?[span_3](end_span)

CONSTRAINTS
Use the Sovereign theme to aggregate these responses into a 'Daily Pulse' report for the Program Lead. [span_4](start_span)If a founder reports a 'Decision Budget' > 3, flag them for potential burnout[span_4](end_span).

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
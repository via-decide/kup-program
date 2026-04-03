You are working in repository via-decide/kup-program on branch main.

MISSION
Implement the 'Pivot Trigger Monitor' in src/ops/pivot-monitor.js. [span_24](start_span)[span_25](start_span)This service tracks a team's progress against the "Week 3 Friday" Scenario 2 recovery.[span_24](end_span)[span_25](end_span) [span_26](start_span)If accuracy remains below 80% for 48 hours, it must trigger a "Permission to Pivot" alert to the founder.[span_26](end_span) [span_27](start_span)[span_28](start_span)constraints: The 'Sprint Master' agent must provide three pre-vetted scope-reduction options to the team to ensure they still reach a Month 1 MVP.[span_27](end_span)[span_28](end_span)

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
You are working in repository via-decide/kup-program on branch main.

MISSION
Build the 'Scope-Lock Validator' in src/ops/pr-validator.js. Create a GitHub Action that automatically reviews Week 1 PRs. It must check for: 1) A finalized 'Reference Architecture', 2) A defined 'Scenario 2' failure metric, and 3) A 'Decision Budget' audit for the week.

CONSTRAINTS
If the PR includes "New Features" not discussed in the original brief, the 'Quality Reviewer' agent must reject it with the message: "DEFENDING THE FAILURE CEILING. LOCK SCOPE, DON'T EXPAND."

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
You are working in repository via-decide/kup-program on branch main.

MISSION
Implement the 'Founder Onboarding' flow in src/auth/onboarding.js. Create a CLI or simple web form where founders register their GitHub ID and select their intended 'Outcome Path'. Upon registration, the system must issue a 'KUP_FOUNDER' JWT and create a entry in the local SQLite database.

CONSTRAINTS
Use the Sovereign theme to log "NEW FOUNDER ENROLLED: [ID] - [PATH]". Automatically assign the founder to the corresponding Telegram group based on their path.

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
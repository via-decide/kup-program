You are working in repository via-decide/kup-program on branch main.

MISSION
Define the "Failure Tolerance Ceiling" & pivot triggers. HARD METRICS (breach = pivot scope, not push harder): Anomaly detection accuracy <70% → switch to different model / simpler classification task Inference latency >100ms → address quantization bottleneck / reduce features Data quality score <0.6 → sensor quality issue / switch to simulation-only False positive rate >25% → threshold tuning limit, reduce alert scope SOFT METRICS (breach = adjust timeline / add support): Accuracy 70-79% → reduce coverage to 1 lane, retrain Latency 80-100ms → defer advanced features to post-MVP Data quality 0.6-0.75 → add data cleaning module (2 extra days) False positives 15-25% → manual threshold tuning (3 extra hours + mentor support) CREATE A "DECISION TREE" for program lead: If metric breaches hard ceiling → schedule 30-min pivot discussion with founders. No shame, clear permission to reframe scope.

CONSTRAINTS
Metrics must be measurable by Friday of each week. Pivot decisions must be documented in GitHub issue for transparency.

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
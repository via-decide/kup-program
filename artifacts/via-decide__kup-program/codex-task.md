You are working in repository via-decide/kup-program on branch main.

MISSION
Integrate the 5 decide.engine-tools into KUP curriculum as operational tools.

CONSTRAINTS
Tools must be used as deliverable generators, not one-off exercises. Founders should own the outputs (not just run a tool and forget).
Define the "Failure Tolerance Ceiling" & pivot triggers. HARD METRICS (breach = pivot scope, not push harder): Anomaly detection accuracy <70% → switch to different model / simpler classification task Inference latency >100ms → address quantization bottleneck / reduce features Data quality score <0.6 → sensor quality issue / switch to simulation-only False positive rate >25% → threshold tuning limit, reduce alert scope SOFT METRICS (breach = adjust timeline / add support): Accuracy 70-79% → reduce coverage to 1 lane, retrain Latency 80-100ms → defer advanced features to post-MVP Data quality 0.6-0.75 → add data cleaning module (2 extra days) False positives 15-25% → manual threshold tuning (3 extra hours + mentor support) CREATE A "DECISION TREE" for program lead: If metric breaches hard ceiling → schedule 30-min pivot discussion with founders. No shame, clear permission to reframe scope.

CONSTRAINTS
Metrics must be measurable by Friday of each week. Pivot decisions must be documented in GitHub issue for transparency.
Design the "Energy Management Framework" for Month 1. Create a weekly calendar view: for each day Mon-Fri, allocate mental/physical/emotional energy slots. Monday morning = high mental (decisions, architecture). Monday evening = low (admin). Tuesday-Wednesday = physical (coding, hardware). Thursday = emotional (stakeholder calls). Friday = recovery. For each role (data engineer, backend, business, domain), customize the energy allocation. Create a "burnout early warning" checklist: if founder hitting >2 high-energy days in a row, program lead checks in. Build in mandatory breaks: 15-min breaks every 90 min, 1-hour lunch, no Slack after 7 PM.

CONSTRAINTS
Must be data-driven (track actual time spent in high-energy tasks). Founders should feel permission to decline low-impact tasks when energy is low.
Create the mentor assignment + rotation framework. Identify 3 mentor roles: (a) Technical Lead (edge ML, Jetson), (b) Business Lead (NHAI, partnerships), (c) Domain Expert (highway systems, sensor physics). For each role, define: domain, weekly time budget (1 hour), response time SLA (24 hrs async or scheduled call). Create Telegram bot integration: founders DM mentor with question, response tracked, escalations logged. Define escalation criteria: if response time exceeded 2×, escalate to program lead. Collect mentor feedback weekly: "Did founders ask smart questions? Were sessions high-signal?" Mentor template should include: - Name & expertise - Weekly availability window - Preferred contact method - Three example questions they're prepared to answer - Off-limits topics (hand-holding vs. strategy)

CONSTRAINTS
Mentors are bounded (1 hr/week). Founders learn to ask better questions, not rely on endless help. Rotate mentors monthly post-MVP (founders get fresh perspective).
Design the "Ruthless Sprint" schedule for Month 1. Week 1: Problem definition + use-case charter (not code). Deliverable: signed charter with KPIs, data readiness score, stakeholder map. Week 2: Data pipeline architecture. Deliverable: end-to-end simulated data flowing through edge hardware. Week 3: Model deployment + Scenario 2 stress test. Deliverable: anomaly detection >80% accuracy on noisy production-like data. Week 4: Integration + documentation + demo. Deliverable: working MVP + technical docs + NHAI engagement brief. Attach daily async standup template (Slack thread): Done / Blocked / Needed / Mood. Attach weekly sync agenda (Friday 4-5 PM, 30 min): Metrics → Blockers → Priorities → Burnout check.

CONSTRAINTS
No task should take more than 8 hours in a day. Friday afternoons reserved for recovery (celebration, planning, not execution). Decision budget enforced: some decisions must wait for team vote, not individual founders.

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
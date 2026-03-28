Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Design the three Founder Outcome Paths. PATH 1: INFRASTRUCTURE STARTUP
Create the three stakeholder narratives & outreach templates. GOVERNMENT NARRATIVE (NHAI, Gujarat State Transport):
Integrate the 5 decide.engine-tools into KUP curriculum as operational tools.
Define the "Failure Tolerance Ceiling" & pivot triggers. HARD METRICS (breach = pivot scope, not push harder): Anomaly detection accuracy <70% → switch to different model / simpler classification task Inference latency >100ms → address quantization bottleneck / reduce features Data quality score <0.6 → sensor quality issue / switch to simulation-only False positive rate >25% → threshold tuning limit, reduce alert scope SOFT METRICS (breach = adjust timeline / add support): Accuracy 70-79% → reduce coverage to 1 lane, retrain Latency 80-100ms → defer advanced features to post-MVP Data quality 0.6-0.75 → add data cleaning module (2 extra days) False positives 15-25% → manual threshold tuning (3 extra hours + mentor support) CREATE A "DECISION TREE" for program lead: If metric breaches hard ceiling → schedule 30-min pivot discussion with founders. No shame, clear permission to reframe scope.
Design the "Energy Management Framework" for Month 1. Create a weekly calendar view: for each day Mon-Fri, allocate mental/physical/emotional energy slots. Monday morning = high mental (decisions, architecture). Monday evening = low (admin). Tuesday-Wednesday = physical (coding, hardware). Thursday = emotional (stakeholder calls). Friday = recovery. For each role (data engineer, backend, business, domain), customize the energy allocation. Create a "burnout early warning" checklist: if founder hitting >2 high-energy days in a row, program lead checks in. Build in mandatory breaks: 15-min breaks every 90 min, 1-hour lunch, no Slack after 7 PM.
Create the mentor assignment + rotation framework. Identify 3 mentor roles: (a) Technical Lead (edge ML, Jetson), (b) Business Lead (NHAI, partnerships), (c) Domain Expert (highway systems, sensor physics). For each role, define: domain, weekly time budget (1 hour), response time SLA (24 hrs async or scheduled call). Create Telegram bot integration: founders DM mentor with question, response tracked, escalations logged. Define escalation criteria: if response time exceeded 2×, escalate to program lead. Collect mentor feedback weekly: "Did founders ask smart questions? Were sessions high-signal?" Mentor template should include: - Name & expertise - Weekly availability window - Preferred contact method - Three example questions they're prepared to answer - Off-limits topics (hand-holding vs. strategy)
Design the "Ruthless Sprint" schedule for Month 1. Week 1: Problem definition + use-case charter (not code). Deliverable: signed charter with KPIs, data readiness score, stakeholder map. Week 2: Data pipeline architecture. Deliverable: end-to-end simulated data flowing through edge hardware. Week 3: Model deployment + Scenario 2 stress test. Deliverable: anomaly detection >80% accuracy on noisy production-like data. Week 4: Integration + documentation + demo. Deliverable: working MVP + technical docs + NHAI engagement brief. Attach daily async standup template (Slack thread): Done / Blocked / Needed / Mood. Attach weekly sync agenda (Friday 4-5 PM, 30 min): Metrics → Blockers → Priorities → Burnout check.

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
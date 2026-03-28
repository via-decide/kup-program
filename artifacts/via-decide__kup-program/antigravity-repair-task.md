Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Define the "Failure Tolerance Ceiling" & pivot triggers. HARD METRICS (breach = pivot scope, not push harder): Anomaly detection accuracy <70% → switch to different model / simpler classification task Inference latency >100ms → address quantization bottleneck / reduce features Data quality score <0.6 → sensor quality issue / switch to simulation-only False positive rate >25% → threshold tuning limit, reduce alert scope SOFT METRICS (breach = adjust timeline / add support): Accuracy 70-79% → reduce coverage to 1 lane, retrain Latency 80-100ms → defer advanced features to post-MVP Data quality 0.6-0.75 → add data cleaning module (2 extra days) False positives 15-25% → manual threshold tuning (3 extra hours + mentor support) CREATE A "DECISION TREE" for program lead: If metric breaches hard ceiling → schedule 30-min pivot discussion with founders. No shame, clear permission to reframe scope.

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
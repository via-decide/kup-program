Repair mode for repository via-decide/kup-program.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Design the Week-by-Week KPI Dashboard. WEEK 1 KPIs: Charter complete (% of teams with signed charter) Data readiness score (% of teams with >0.7 readiness) Mentor onboarding (% mentors with 1 scheduled call) Founder mood (% reporting mood >3/5) WEEK 2 KPIs: Data pipeline operational (% of teams with data flowing end-to-end) Feature extraction complete (# features extracted per team) Labeling consensus (% inter-annotator agreement) No burnout incidents (founder mood unchanged) WEEK 3 KPIs: Model accuracy (baseline >70%, target >80%) Scenario 2 test passed (% teams achieving post-drift accuracy >70%) Drift detection deployed (% teams with Evidently AI monitoring) False positive rate <20% WEEK 4 KPIs: MVP complete (working system end-to-end) Documentation complete (GitHub repos, API docs, deployment guides) Demo day ready (all 3 paths with 2-min pitches) Research outputs (KTA dataset live, paper outline drafted) Founder satisfaction (exit survey) Create a public dashboard (shared Google Sheet + Grafana view) so all founders see progress.

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
Branch: simba/build-the-founder-onboarding-packet-generator-in
Title: Build the 'Founder Onboarding Packet' generator in src/docs/welcome-p...

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Founder Onboarding Packet' generator in src/docs/welcome-packet.js. [cite_start]This script must generate a personalized PDF for each founder that outlines: 1) Their assigned 'Outcome Path', 2) Their 'Decision Budget' (3 choices/week), and 3) The 'Failure Ceiling' pivot rules. [cite: 18, 28-29]

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
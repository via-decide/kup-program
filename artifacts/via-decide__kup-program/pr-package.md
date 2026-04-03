Branch: simba/build-the-ecosystem-manifest-generator-in-srcdis
Title: Build the 'Ecosystem Manifest Generator' in src/dist/daxini-manifest....

## Summary
- Repo orchestration task for via-decide/kup-program
- Goal: Build the 'Ecosystem Manifest Generator' in src/dist/daxini-manifest.js. This script must crawl your src/templates/ folder and generate a standardized metadata file for Daxini.Space. [span_8](start_span)constraints: Each "App" must include a direct link to the LogicHub deployment layer[span_8](end_span). Ensure the manifest includes the "0-Token KUP Founder" bypass logic so the 30 founders can access these tools through the storefront for free.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
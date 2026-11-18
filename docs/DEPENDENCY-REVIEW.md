# Dependency review — 2026-11-17

All eight high audit entries trace to one advisory: picomatch ReDoS through single-branch repeated extglobs, GHSA-fc5q-39xc-vjpf (CVE-2026-112366).

Official source: https://github.com/advisories/GHSA-fc5q-39xc-vjpf
The advisory lists <=4.0.7 as affected and no patched version. npm registry latest picomatch is 4.0.7. A malicious glob pattern can cause excessive regex backtracking and block a Node.js process. This is an availability issue, not evidence of credential theft or website compromise.

| Audit entry | Installed | Purpose / dependency | Fix assessment |
| --- | --- | --- | --- |
| picomatch | 2.3.2, 4.0.7 | Filename/glob pattern matching; root advisory | No officially patched npm version available |
| micromatch | 4.0.8 | Pattern matching built on picomatch 2.x | Latest version still depends on affected picomatch |
| fast-glob | 3.3.3 | File enumeration via micromatch | Inherits the same issue; no independent vulnerability here |
| globby | 11.1.0 | Convenient file discovery for gh-pages | Inherits through fast-glob; not a separate defect |
| gh-pages | 6.3.0 | Publish dist to the gh-pages branch | Current latest still uses the affected chain; audit suggests downgrade to 6.1.1, not an upstream patch |
| fdir | 6.5.0 | Directory traversal/filtering for Vite/tinyglobby | Inherits affected picomatch |
| tinyglobby | 0.2.15 | Lightweight file globbing for Vite | Latest 0.2.17 still depends on affected picomatch; compatible audit-fix simulation leaves all eight high entries |
| vite | 6.4.6 | Dev server and production build | Latest 8.3.8 still declares picomatch ^4.0.7; audit suggests old 6.2.7 to avoid this dependency chain, not fix it |

No force downgrade, major upgrade, audit suppression, local node_modules patch, or unreviewed fork was applied. Downgrading Vite would give up later fixes and needs a separate full vulnerability/compatibility review; forcing a different picomatch major into micromatch would not remove this advisory anyway.

## Exposure in this portfolio

- Static GitHub Pages output has no Node.js server; these are build/deployment tool dependencies, not browser runtime dependencies.
- No app code accepts user-supplied glob patterns or imports these matching packages.
- Deployment uses gh-pages defaults.src = **/* against local dist. No custom external glob input is configured.
- This lowers exposure for the current trusted local build workflow, but does not make the installed vulnerable package fixed. Untrusted repository/build configuration and arbitrary patterns must not be treated as safe inputs.
- Production-only audit remains zero; full audit remains eight high entries.

## Validation

- npm audit and registry metadata inspected; npm audit fix --dry-run confirms a compatible tinyglobby update alone leaves eight entries.
- npm run lint, npm run build, npm run verify pass.
- Actual installed globby enumerated all 83 dist files with the gh-pages default pattern and found index.html. No gh-pages.publish call, Git operation, push, or deployment was executed.

Resolution requires an official picomatch fix (and lockfile update), or a separately designed replacement of the affected tool chains. No unattended monitoring was configured.

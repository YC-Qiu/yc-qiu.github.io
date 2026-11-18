# Portfolio upgrade — local preview (2026-11-17)

## Scope and Git

All changes are in `C:\Codes\GitHub\yc-qiu.github.io`, branch `upgrade/portfolio-preview`. The working tree was clean before editing. No commit, push, or deployment was performed.

`git ls-remote` confirmed the same heads as the local branches:
- main: `1f0e61c`, 2026-04-02, Update NU courses.
- gh-pages: `3cd664b`, 2025-11-04, Updates.
The live Projects page has 9 projects; current source has 10, including Meal Logistics Planner. This confirms the live site does not include all current source content.

## Preview and commands

Open http://127.0.0.1:4173/#/projects or http://127.0.0.1:4173/ while the local preview is running.

```powershell
cd C:\Codes\GitHub\yc-qiu.github.io
npm ci
npm run build
npm run verify
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

`npm run deploy` remains unchanged and has NOT been run. No CDN-based verification output is used. The browser previews the real Vite `dist` build.

## Implementation

- Retained the home illustration, original section artwork, name, links, Fredoka name lettering and Orbitron titles. Fonts are self-hosted, with local fallback fonts.
- Interior pages share navigation, footer, layout, typography and warm-paper / blue-ink styling. Visual direction is a preview, not a user-approved final theme.
- Projects has a featured project, 10 cards, filters (AI/ML 3, Games 4, Coursework 3), keyboard-operable expandable details, full original descriptions and contribution lists, all original links and full-resolution image links. No search because the collection is small.
- Projects without screenshots use explicitly illustrative CSS artwork, not fabricated product screenshots.
- Source content lives in `src/data`; shared rendering in `src/components`; four interior routes are lazy-loaded. Home is in the entry bundle.
- Removed background-image loading gates, external Google Fonts stylesheets, duplicate Font Awesome and obsolete preload. Interior backgrounds need no image requests.
- Generated responsive WebP versions of project/tabletop images; original PNGs remain. Original-image links allow inspection of chart text at full resolution.
- Video iframe is absent until clicked; it is removed when its parent detail/demo is closed. A direct YouTube link remains available.
- Route chunks have an error boundary with reload and persistent navigation. Entry-script failure has an independent HTML error handler. Image errors fall back to original PNG then show a recovery link. Decorative background errors leave readable solid color.
- Small CSS transitions replace the motion library. Reduced-motion CSS disables animation and transforms. Buttons expose expanded/pressed state; keyboard focus is visible; skip-to-content is supported.

## Measured sizes

Decimal KB/MB, from actual production builds and file sizes; these are payload measurements, NOT a claim about public-site seconds or Lighthouse scores.

| Resource | Original | Final |
| --- | ---: | ---: |
| Entry JS | 379.47 KB (121.22 KB gzip) | 240.12 KB (77.03 KB gzip) |
| CSS | 81.50 KB (25.01 KB gzip) | 25.70 KB (6.22 KB gzip) |
| Home background desktop | 3,550,083 bytes | 220,028 bytes |
| Home background mobile | 3,550,083 bytes | 29,856 bytes |
| Interior decorative background requested | 3,817,111 bytes | 0 bytes |
| Projects route | In entry bundle | 16.42 KB (6.05 KB gzip), plus shared media 1.54 KB |
| Font files requested | Multiple Google + FA families | Two local WOFF2 files, 22.82 KB total on home |

Entry JS decreased about 37%; CSS about 68%; desktop home background about 94%; mobile background about 99%. Updated compatible dependency patches changed the intermediate 234 KB JS result to the final 240 KB result above. `image-sizes.json` records project/tabletop image conversion sizes.

## Verification performed

- `npm ci` completed; subsequent package changes installed successfully; formal Vite production build passed after final code edits.
- `npm run verify` compares all five original data arrays with the baseline commit, including original prose, links, image paths, courses, roles and timelines. It also checks image variants, category counts and production route chunks. Passed.
- Browser checks at desktop 1440×1000, default ~822px, mobile 390×844, and Projects at 320px. No measured horizontal overflow on the checked mobile layouts.
- Viewed Home, Projects, Education, Experience and Board Games on desktop and mobile. Project filters, detail open/close, keyboard Enter, board-game details and navigation worked.
- Browser confirmed mobile project images use `-mobile.webp`, and mobile home uses `index_bg-mobile.webp`. Visible project images loaded successfully; original paths remain available.
- Video iframe count was zero before activation. After clicking, the real YouTube player loaded and playback advanced with captions; closing unloaded it.
- Refreshed `/#/projects` successfully. HashRouter and `base: '/'` are retained for the root GitHub Pages site. Fragments do not become server paths; deep links must use `/#/projects`, not `/projects`. No deployment/server rewrite is needed for these hash routes.
- Fault server `node scripts/preview-failures.mjs` deliberately returns 503 for backgrounds and Projects chunks. Home remained readable and navigable without its background. Projects showed a reload error UI with navigation rather than a blank page. This server is QA-only and not included in dist.
- Final normal preview console had no captured errors. `git diff --check` passed.
- Screenshots: `preview/projects-desktop.jpg`, `preview/projects-mobile.jpg`.

## Remaining limitations / follow-up

- No deployed measurements, Lighthouse score, throttled cold-cache timing, or real-phone hardware profiling. Browser tooling did not expose Performance API timing in its read-only evaluation surface. Size reductions and observed interactions above are the measured evidence.
- Reduced-motion behavior was checked in CSS; OS-level reduced-motion emulation was not available in the browser tool.
- Original links are preserved and local assets checked; every external download / third-party website was not exhaustively opened.
- Original board-game notes contain relative dates such as “next month” and plans for December, and a publication remains “In preparation.” They are deliberately preserved, not claimed to be current; owner confirmation is needed before updating those facts.
- Compatible `npm audit fix` reduced initial 17 advisories to 8 high advisories in development tooling (picomatch and dependent Vite/gh-pages paths). `npm audit --omit=dev` reports zero. The suggested forced fix would downgrade Vite, so no forced downgrade was applied.
- The original PNGs remain in public/dist to preserve original-image URLs, so total deployment size is not equivalent to the smaller initial download.

## Owner-requested follow-up corrections

- Replaced home/footer social labels with SVG icons; home and Projects cards now have transparent resting surfaces with subtle interaction highlights.
- Corrected the sentiment project's title to “Cross-Domain Sentiment Analysis without Fine-Tuning.” The owner clarified that its focus is performance degradation under domain shift and improvements without fine-tuning. Removed the earlier unsupported textual-perturbation framing and claims about specific defenses/results, and updated the illustrative cover text. Existing institution, date, links and media remain unchanged. Content verification permits only this project's approved title, technology summary, description and contribution edits; all other original data is still compared exactly.

## Additional projects (2026-11-17)
- Added Abbott — Mia AI Agent, Narrative AI, and Football Foul Detection and Contact Visualization (13 total; AI category 6).
- Sources: local Abbott Mia Front Door frontend concept; local AI_Story_Proposal_ZH/main.tex; Football Foul Detection - 20 Minute Presentation on connected Drive.
- Abbott is explicitly a frontend prototype with illustrative local data; Narrative AI is a design proposal. No live integration or planned evaluation is presented as completed work. Football wording follows the presentation's foul-recognition/contact-review scope, not fall detection. Individual contributions for football were not established, so details are labeled Project highlights.
- No private source documents or unconfirmed repository/demo links were copied into public assets. Lightweight HTML/CSS workflow covers add no image requests.
- Production build and preservation verification pass; checked AI filtering, all three expand controls, and mobile width. Mobile workflow containers use automatic height to avoid clipping their step labels.

## Owner-supplied project copy and cover revision (2026-11-17)
- Replaced the three draft descriptions with owner-supplied card copy, project context, contribution statements, type, and tags. Latest client label is Confidential healthcare company, superseding the earlier Abbott naming instruction.
- Added Taking a Detour to Win: Strategic Blocking in LLM Agents. Preserved the short development-map results (1/50 to 46/50) together with the mirrored wide-map transfer result (0/50) and the explicit lack of robust transfer evidence. Kept teammate attribution.
- Added the supplied football GitHub URL; retained the distinction between pretrained model integration and benchmark research.
- Replaced generic four-step covers with four distinct code-native SVG scenes: permission-bound knowledge retrieval, illustrated storybook/state validation, synchronized football contact overlays, and a grid-world detour. These are labeled conceptual illustrations, not actual system screenshots or evaluation traces.
- New cover code is route-lazy, introduces no new library or remote image fetch. Projects route gzip is 10.52 kB; entry remains 77.81 kB gzip. Total projects: 14; AI category: 7.
- Vite production build and content-preservation check pass. Browser checked 1280px desktop and 390px mobile viewport; mobile content width equals client width (375px excluding scrollbar). All four detail controls open using Enter and close using click; filtering shows seven AI entries. Saved desktop screenshot in docs/preview/project-covers-desktop.png. No push or deployment.

## Atmospheric backgrounds (2026-11-17)
- New homepage artwork generated with built-in image_gen; original background preserved. Prompt and mode are recorded in background-image-prompt.txt. New source: public/assets/images/home-atmosphere-v2.png.
- Served WebP sizes: desktop 30,086 bytes; mobile 12,140 bytes. Previous optimized homepage background was 220,028 bytes; original PNG 3,550,083 bytes. These are file-size measurements, not measured network load times.
- Homepage content remains independent of image loading; failed background images are hidden over a CSS fallback. Mobile uses the quiet center crop to preserve navigation clarity.
- Interior pages now share pale cyan/lavender gradients, a fading grid, and two slow transform-only CSS glow animations. No animation library, pointer event loop, canvas, or background image request. Reduced-motion media query disables the ambient animation.
- Browser checked 1440x900 desktop and 390x844 mobile: both intended WebP resources loaded, navigation works, and neither home nor projects has horizontal overflow. Observed running ambient transforms. Reduced-motion rule inspected in source; OS preference was not changed during verification. Screenshots: home-atmosphere-v2.png and projects-atmosphere-v2.png in docs/preview.
- Production build and original-content preservation verification passed. Let’s talk remains mailto:yc_qiu@hotmail.com; it opens the visitor’s configured email handler. No push or deployment.

## Interactive controls and featured project (2026-11-17)
- Removed the Projects closing invitation (NEXT CONVERSATION / Have something interesting in mind / Let’s build something).
- Featured Narrative AI Agent with a functional design-detail disclosure and explicit system-design/evaluation-plan status. Meal Logistics Planner remains in the grid with its original links and click-to-load video.
- Latest owner instruction restores Abbott naming: Abbott — AI Knowledge Assistant; client Abbott.
- Added real SVG game-piece buttons beneath homepage social links: roll die, move pawn, rotate puzzle, with visible/live text feedback. Static painted background decorations remain decorative. Keyboard Enter works; reduced-motion disables transitions.
- Added native range-based scroll navigation: vertical on desktop, compact horizontal on mobile. Progress derives from actual scroll position, recalculated after document resize (including detail/filter changes). Uses a passive scroll listener and event-scheduled animation frame, with cleanup; no continuous JS animation loop.
- Production build and original-content verification passed. Browser verified all three homepage interactions, Narrative disclosure, Abbott title, removal of closing invitation, slider Home/End (bottom: 5246.67px of 5247px) and mobile ArrowRight (1%). Mobile content width equals viewport width. Desktop screenshot saved as docs/preview/narrative-featured-interactive.png. No push or deployment.

## Navigation reconciliation fix (2026-11-17)
- Reproduced in Vite dev: clicking Education from Projects changed the URL but retained Projects content. React logged duplicate sibling key /projects.
- Cause: PageErrorBoundary and ReadingRail were siblings both keyed by pathname. Gave them distinct page: and rail: key namespaces, preserving route reset behavior without sibling collisions.
- Browser regression: after one initial reload to discard the corrupted pre-fix tree, clicked Projects -> Education -> home -> Projects -> Experience -> Board games in dev without refresh. Production preview: Projects -> Education -> Experience -> Board games -> Projects -> home, then Back/Forward. Verified URL and destination heading, exactly one main element, and no warning/error logs in the fresh production tab.
- npm run build and npm run verify passed. No push/deploy. Existing open preview tabs need one reload to obtain the new JS bundle; subsequent navigation requires no refresh.

## Independent animated game pieces (2026-11-17)
- Edited the 2D background with built-in image_gen to remove controller, dice, puzzle, knight and pawn; preserved edge doodles. New source home-cartoon-clean-v4.png; served desktop WebP 16,642 bytes and mobile WebP 6,766 bytes. Full edit prompt: docs/clean-background-prompt.txt.
- Replaced small play controls with independent responsive SVG game objects: controller auto-animation (buttons/joystick, pause/resume), 650ms click-to-roll die followed by random result, click/Enter chess knight hop, and 90-degree puzzle rotation. Roll timeout is cleaned up on unmount. Reduced-motion removes animations and returns dice results immediately.
- Build and preservation verification pass. Browser verified rolling busy-to-ready state, keyboard knight move, puzzle feedback, controller running/paused animation states, mobile layout with no horizontal overflow, and Projects -> Education -> home navigation without refresh. No warning/error logs. Screenshot: docs/preview/independent-game-elements.png. No push/deployment.

## Final release readiness check — 2026-11-17
- PASS: npm run build, npm run verify, npm run lint, git diff --check. Verification retains original content, checks 14 projects/category counts and image variants, and confirms route splitting.
- ESLint now excludes archived Old/ scripts (legacy site/vendor JS); active app remains checked. Converted unused legacy Tailwind config to project-consistent ESM. RichText now renders owner-provided Markdown bold markers as well as legacy highlight tags.
- Browser production check: all five routes via links, exactly one main per route; Projects direct reload; AI filter; project disclosure; numerical result emphasis; video iframe absent before click and present afterward with youtube-nocookie URL. This confirms player creation, not successful end-to-end external YouTube playback.
- Mobile 390px: homepage backgrounds/icons all loaded; homepage and Projects have no horizontal overflow. Literal local asset references exist in dist. No .env or source-map files found in dist.
- GitHub Pages configuration: base /, HashRouter, deploy script gh-pages -d dist with predeploy build. Source currently on upgrade/portfolio-preview, uncommitted. No commit/push/deployment performed.
- Dependency audit: production dependencies 0 vulnerabilities; full audit reports 8 high entries in dev/build/deploy dependency chain rooted in picomatch ReDoS. Recorded in docs/dependency-audit.json. No force downgrade applied to Vite/gh-pages. Those packages are not part of the browser runtime, but remain a tooling maintenance issue.
- Existing unused generated artwork versions remain preserved; they do not load on the page, though public assets are copied into dist. No live-site post-deployment check possible before authorized deployment.

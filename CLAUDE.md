# Rising Tide Counseling — risingtidecounseling.com redesign

Leaf9 client project. **Jada Kouba, LCMHC (FL) / LCPC (ME)** — solo Christian counseling
practice, 100% telehealth, self-pay ($135 individual / $165 couples, superbills).
20 years experience. Jada is Ben's wife. Old site: WordPress/Astra (content captured in
`docs/content-inventory.md` — rewrite against it, lose nothing true).

**Conversion action:** Request a Free Consult — via **Fillout embed**
(`data-fillout-id="21y4Av7pnmus"`, script `https://server.fillout.com/embed/v1/`).
One CTA phrase sitewide.

## Decisions (Ben, Aug 27, 2026)

- **Faith-forward lead:** "Clinical Counseling from a Biblical Worldview" stays the
  headline register. Site speaks as "I" (Jada) — solo practitioner, never "we".
- **Intake page: dropped** from the new site (old WP intake handled elsewhere; marketing
  site only, no PHI).
- **Imagery:** 7 real photos of Jada (`assets/jada/` — porch, palm-tree, studio
  settings) + the wave library Jada loves (`assets/waves/` — use directly, graded to
  palette, or as Higgsfield style references; Ben, Aug 27: "Jada really likes those wave
  photos") + generated watercolor via Higgsfield (candidate batches, Ben picks).
  Library first, generation second. Other old-site stock in `assets/source/` is
  reference-only — never reuse.
- **Theme (given):** coastal waves — airy, clean, photography-forward, watercolor waves.
- **Stack:** Vite + React + TypeScript + Tailwind (+ shadcn/ui) — must port cleanly to
  Lovable via GitHub for ongoing management.
- **Brand ink measured from logo:** `#003130` (flat single color — vectorizable). Logo
  source is low-res (292×115) — plan an upscale/redraw pass before launch.

## Process state (Leaf9 design-directions skill)

- ✅ Phase 1 — `docs/discovery.md` + `docs/content-inventory.md`
- ✅ Phase 2 — **skipped per Ben** (client-supplied reference stands in; mini convention
  map lives inside `docs/direction.md`)
- ✅ Phase 3 — `docs/direction.md` + `concepts/` (3 concepts; `compare.html` shows all)
  - **«Watermark» — SELECTED by Ben, Aug 27, 2026** (paint carries it: watercolor wave
    washes from the logo's brushwork, shell-white air, pine ink, Cormorant Garamond ×
    Mulish). Sea Glass donates pill tags + sticky mobile CTA; First Light donates the
    proud fee ledger.
- ⬜ Phase 4 — `styleguide/index.html` (tokens = the contract; `--rt-*`)
- 🔶 Phase 5 — `comps/homepage.html` r2 built on tokens v1.1; awaiting Ben/Jada sign-off
  - **Imagery refinement (Ben, hero-picker round, Aug 27):** section seams carry REAL
    SW Florida wave photos faded into a pure-white page (mask gradients); watercolor
    demoted to accent scale (footer squiggle + brush stroke in `assets/art/`, both
    Ben-approved). Watercolor band candidates in `assets/art/candidates/` (unused).
  - Hero = `assets/waves/wave-aerial-turquoise.jpg` · mid band = `heart-in-sand-foam.jpg`
  - Live Fillout embed renders in the consult section; dev tweaks bar present (strip
    before anything client-facing).
- ⬜ Phase 6 — site build in `site/` (Vite app; reads `process.env.PORT`)

## Hard rules

- Reference project in `example site/` (Wildflower) is for **process/structure/register
  only — never borrow its aesthetics** (meadow botanicals, Newsreader/Inter, its palette).
- No generated imagery until a concept is chosen; flat CSS/SVG stand-ins at correct
  aspect ratios until Phase 5.
- **Ben makes gate decisions** (concept picks, scope calls) — stop and ask.
- **Local only until Ben says push.** No Netlify deploys yet; no GitHub repo yet (Ben
  must confirm repo name/visibility — target `leaf9/rising-tide`).
- Crisis note (988) near every contact/consult form. No PHI in any form.
- US English everywhere (see global CLAUDE.md).
- Old-site URLs to preserve/301 at launch: `/about/`, `/services/`, `/resources/`,
  `/contact/` (drop `/intake/`).

## Preview

`preview_start` with config `design-artifacts` (python http.server on port 4179 at repo
root). Key pages: `/concepts/compare.html`, individual concepts in `/concepts/`.

# Wildflower Collective — meetwildflower.com redesign

Leaf9 client project. Group therapy practice in **Easton, Maryland** (Eastern Shore):
Carolyn Button LCSW-C (founder), Amanda Priestly LGPC, Logan Blake LGSW. DBT/CBT for
ages 10+, divorce/co-parenting specialty, CareFirst BCBS in-network, SimplePractice
booking. Colorado telehealth secondary.

**Conversion action:** request a free 15-minute consult. Everything serves this.

## Process state (Leaf9 design-directions skill)

- ✅ Phase 1 — `docs/discovery.md` (audit of old WP site: broken carolynbutton.com
  redirect, clunky Google Form contact embed, no H1/meta/CTA)
- ✅ Phase 2 — `research/board.md` (category + aspirational lanes, convention map)
- ✅ Phase 3 — `docs/direction.md` + `concepts/` (3 concepts; `compare.html` shows all)
  - **«Easton Light» — SELECTED by Ben, Aug 25, 2026** (Meadow in Broad Daylight and
    The Kitchen Table not chosen; Kitchen Table donates microcopy ideas where they fit)
- ✅ Phase 4 — `styleguide/index.html` v2.0 (Easton Light)
  - `:root` `--wf-*` tokens are THE CONTRACT. No rogue hex values or fonts downstream.
- ⬜ Phase 5 — homepage comps in `comps/` (imagery via Higgsfield only after sign-off)
- ⬜ Phase 6 — site build in `site/` (Vite static, reads `process.env.PORT`)

## Hard rules

- Brand: the watercolor logo (`assets/brand/Wildflower-logo-new-CROP.png`) is mandated.
  Direction is «Easton Light»: cool cream + tide `#3f6491` + marsh `#5c6e2e`;
  **lavender-deep `#6f5490` is the ONLY filled-button color** (Ben: no red CTAs;
  poppy `#b0421f` = errors only). Hero art: full meadow strip (hero-2, Ben's pick).
  **No photography** (Ben's call, Aug 25, 2026) —
  the art program is generated watercolor botanicals in the logo's palette/brushwork:
  contained, botanical-study restraint, type never over art, no washes behind text,
  florals only (no generated people/places). UI chrome stays quiet; art carries the
  six signature hues. Candidate batches via Higgsfield; Ben picks before anything ships.
- Fonts: Newsreader (display, light weights) × Inter (body). Radius 2px. Motion:
  opacity-only crossfades. US English everywhere.
- **Process:** Ben makes gate decisions (concept picks, scope calls) — stop and ask
  rather than proceeding on a recommendation, even when running unattended.
- **Local only until Ben says push** — no Netlify deploys, no GitHub repo yet
  (Ben must confirm repo name/visibility first; target `leaf9/wildflower-collective`).
- Copy: practice speaks as "we"; clinician bios speak as "I". "Request a free consult"
  is the one CTA phrase. 988 crisis note near every form. No PHI in forms.
- At launch: 301 the eight old `index.php/…` URLs; client must fix carolynbutton.com's
  broken redirect (missing `/` in Apache RewriteRule target).

## Preview

`preview_start` with config `design-artifacts` (npx serve at repo root), or any static
server. Key pages: `/concepts/compare.html`, `/styleguide/index.html`.

# Rising Tide Counseling — Discovery & Audit

**Date:** August 27, 2026 · Phase 1 of the Leaf9 design-directions process
**Client:** Jada Kouba, LCMHC (Florida) / LCPC (Maine) — solo private practice, 100% telehealth
**Current site:** https://risingtidecounseling.com (WordPress 7.1, Astra theme, Spectra blocks, Gravity Forms)

## Business

- **Model:** solo practitioner, virtual-only sessions, self-pay. No insurance billing —
  superbills provided for client-side reimbursement.
- **Offer:** 60-min individual counseling **$135** · 60-min couples counseling **$165**.
  Sessions run 55 minutes. Payment due at time of service; card on file supported.
- **Services:** Individual counseling · Couples counseling · Christian counseling &
  discipleship · Parental support counseling.
- **Geography:** licensed in **Florida and Maine** (telehealth to residents of both).
- **Experience:** 20 years in mental health, 15 years running her own private practice.
- **Positioning (current):** "Clinical Counseling from a Biblical Worldview" — faith-based
  identity is the H1-level lead. Footer: "Online Christian counseling with Jada Kouba, LCPC."
- **Approach:** integrative and holistic — Psychodynamic, Mindfulness-Based CBT, DBT —
  woven with Christian faith ("mind, body, and spirit").

## ICP

- **Primary:** an adult (skewing women, 28–55) in Florida or Maine searching for a
  therapist who shares her Christian faith — anxious, grieving, or rebuilding after a
  difficult relationship (narcissistic abuse and divorce recovery are named specialties).
  She arrives tired of secular-feeling options and wants clinical credibility *and*
  spiritual alignment. Objections: cost/insurance ("do you take my plan?"), "will
  telehealth feel personal?", "is it okay to feel nervous?"
- **Secondary:** couples seeking faith-aligned marriage counseling; parents wanting
  support/guidance.
- **State of mind on arrival:** overwhelmed, hopeful but hesitant, screening for warmth
  and trustworthiness within seconds. The FAQ already speaks to nervous first-timers —
  keep that pastoral, reassuring register.

## The ONE conversion action

**Request a free consult** (current sitewide CTA: "Request a Free Consult", Gravity Form).
Everything on the new site serves this. Secondary action: read pricing/FAQs (self-pay
model needs to be explained before the ask, or the consult call gets spent on it).

## Current site inventory (content worth keeping — full copy in `docs/content-inventory.md`)

| URL | Content | Verdict |
|---|---|---|
| `/` | Hero (Biblical worldview H1), 3 value props (client-centered / goal-focused / education-based), About Jada teaser, scripture-toned pull quote, 3 testimonials (M.C., B.I., E.N.), CTA band | Keep substance, rewrite for rhythm |
| `/about/` | Jada's bio (20 yrs, 15 yrs private practice), Core Principles, Therapeutic Techniques, 16-item "I work with" list | Keep, tighten |
| `/services/` | 16 areas of expertise + 4 service descriptions | Keep, restructure |
| `/resources/` | Pricing ($135/$165), fees & superbill explanation, 9 FAQs | Keep — strongest page on the site |
| `/intake/` | Password-protected client intake (Gravity Forms + signature plugin) | **Scope question for Ben** — replicate, link out, or drop |
| `/contact/` | Consult request form (Gravity Forms) | Rebuild — needs a form backend decision |

No blog. No visible phone/email anywhere (all contact funnels through the form). No
obvious SEO equity to protect beyond the 6 page URLs — keep slugs, 301 anything that moves.

## What's broken / weak (audit)

- Generic Astra-theme look: stock beach photos, default type, no brand cohesion with the
  hand-lettered logo (which is charming and worth keeping).
- The one distinctive asset — the wave-flourish hand-lettered logo in deep teal — is
  visually orphaned; nothing else on the site echoes it.
- Stock imagery misfires: a generic laptop/email photo, an unrelated stock family, a
  silhouette-cross sunset (2025 leftover, likely from a prior theme) — none feel like Jada.
- No pricing on the homepage path; testimonials are plain text; mobile hierarchy is flat.

## Media inventory (`assets/source/`)

- **Real photos of Jada (only two exist):** `jada-kouba-photo-1.jpg` (874×847, seated,
  cream/tan, sheer curtains) · `jada-kouba-photo-2.jpg` (946×1219, standing, same set).
  Warm, natural light, white/tan wardrobe — already on-theme for airy coastal.
- **Brand:** `Asset-2@3x.png` / `cropped-Asset-2@3x.png` (logo, 292×115 — low-res; also
  `logo.png` 12,992-byte copy at repo root) · `cropped-jada-270x270.png` (favicon).
- **Stock (old site, reference only — do not reuse):** `beach.jpg` (aerial turquoise
  wave), `jada-on-beach.jpg` (woman walking shoreline at sunset — not actually Jada),
  `Rising-TIde-Counseling-10..17.jpg` (stock family, laptop, straw-hat woman, New England
  harbor, etc.), `silhouette-of-large-cross-under-orange-sky-*.jpeg`.

## Reference site (client-supplied)

`example site/` = Wildflower Collective, a prior Claude-Code design-directions build Jada
likes. Use for **process/structure and register** (warm, credentialed, unfussy; airy
editorial layout; one CTA phrase; logistics presented proudly). **Do not borrow its
aesthetic** — Wildflower is meadow/watercolor-botanical with no photography; Rising Tide
is coastal, photography-led. Its «Easton Light» direction proves the audience responds to
quiet editorial type + real light — a lesson, not a template.

## Brand mandate from Ben (given, not derived)

- **Theme:** coastal waves — airy, clean, photography-forward, **watercolor waves**.
- **Logo:** existing hand-lettered "Rising Tide Counseling Services" mark in deep
  teal/pine (~#1d4a43) — mandated. Low-res source is a constraint (218×86 display size;
  may need a redraw/vectorize pass or careful upscale).
- Solo practitioner — the site speaks as "I" (Jada), never "we."

## Outcome goals

- Consult requests (measurable: form submissions).
- A site that finally matches the logo's warmth and Jada's presence — she should feel
  proud to send people to it.
- Portable stack: **Vite + React + TypeScript + Tailwind (+ shadcn/ui)** — Lovable's
  native stack, so the repo imports cleanly from GitHub for ongoing management.

## Open questions (gate to Phase 3)

1. **Faith prominence:** keep "Biblical worldview" as the H1-level lead, or lead with
   healing/clinical and weave faith throughout? (Changes hero copy, imagery register, SEO.)
2. **Consult form backend + intake page scope** on a static React site.
3. **Photography plan:** only 2 real photos exist — more from Jada, a shot list for a new
   shoot, and/or generated coastal art to carry the rest?

## Phase plan (adapted per client)

- Phase 2 research: **skipped per Ben** — the Wildflower reference + given theme stand in.
  A mini convention map lives in `docs/direction.md` to keep the honor/break logic explicit.
- Phase 3: 3 coastal concepts (divergent executions *within* the given coastal-waves
  theme) → Ben/Jada pick.
- Phases 4–6 per the standard process. Local only until Ben calls for a Netlify draft.

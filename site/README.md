# Rising Tide Counseling

Marketing site for **Jada Kouba, LCMHC (FL) / LCPC (ME)** — a solo Christian counseling
practice, 100% telehealth, licensed in Florida and Maine.

**The one conversion action is "Request a Free Consult."** Every page ends in it. Don't add
competing calls to action.

## Stack

Vite 6 · React 19 · TypeScript · Tailwind v4 · React Router 7 · shadcn/ui conventions.

```bash
npm install
npm run dev      # http://localhost:5173 (honors process.env.PORT)
npm run build    # tsc --noEmit && vite build  →  dist/
```

## Structure

```
src/
  App.tsx              routes + the mobile sticky CTA
  main.tsx             entry
  config.ts            HERO_VARIANT ('dark' | 'light'), FACEBOOK_URL
  components/
    Nav.tsx  Footer.tsx  CtaBand.tsx  FilloutEmbed.tsx
    FacebookIcon.tsx  Reveal.tsx  ScrollToTop.tsx
    ui/                shadcn components go here
  hooks/usePageMeta.ts per-page <title> + meta description
  lib/utils.ts         cn() — shadcn class merger
  pages/               Home · About · Services · Resources · Contact
  styles/site.css      design tokens + all component styles
public/img/            photography, logo, watercolor art
```

Path alias `@/` → `./src/`. Import as `@/components/Nav`, not relative paths.

## Design tokens are the contract

`src/styles/site.css` holds two synchronized blocks:

1. **`:root` `--rt-*` variables** — the source of truth. All existing CSS reads these.
2. **`@theme`** — mirrors them into Tailwind's namespace so utilities like `bg-pine`,
   `text-sea`, and `font-display` resolve on brand.

**Change a value in both places.** Never introduce a raw hex, font stack, or radius
outside this file.

Key roles: `--rt-pine #003130` is brand ink (measured from the logo) and headline color.
`--rt-cta #8fcfc6` is the **only** filled-button color, always with `--rt-cta-ink` (pine)
text — 7.7:1 contrast. `--rt-sea` carries kickers, links, and small accents.

Shape signature: the "brush cut" — asymmetric radii (`2px 14px 2px 14px` on buttons,
`4px 18px 4px 18px` on cards). Pills are the one exception at `999px`.

Motion: `.rv` fades content up, `.soak` blur-fades imagery. Both are driven by the
`Reveal` component and collapse to opacity-only under `prefers-reduced-motion`.

## Copy rules (client decisions — please preserve)

- **Third person, client-centered.** The subject of a sentence is the client or the work,
  never Jada. No "I offer" / "my approach". First person survives only in genuinely
  personal voice: the About bio, Core Principles, Therapeutic Techniques, the Meet Jada
  teaser, and client testimonials.
- **Never "we"** — solo practitioner.
- **No em dashes.** Use commas, colons, semicolons, or periods. Exceptions: signature
  lines (`— Jada Kouba, LCMHC · LCPC`, `— M.C.`) and number ranges. Page titles separate
  with `·`.
- **Never devalue.** No "the first conversation is free" or "no obligation, no pressure"
  hooks. She is a sought-after therapist; closing copy writes from fit and readiness.
  "Free" appears only as fact: the CTA phrase and the pricing table.
- **Faith-forward lead.** "Clinical counseling from a Biblical worldview" is the headline
  register.
- **Services:** individual, premarital, Christian, parental support. **No couples
  counseling** — it was removed deliberately.
- US English throughout.

## Compliance

- The **988** crisis note must stay near every contact or consult surface.
- **No PHI anywhere.** This is a marketing site. Client intake lives outside it, which is
  why there's no `/intake/` route (it 301s to `/contact/`).

## Forms

The consult form is a **Fillout** embed (`data-fillout-id="21y4Av7pnmus"`), mounted by
`components/FilloutEmbed.tsx`, which re-injects the Fillout script after client-side
navigation. Fillout's API can't create or edit form fields, so field changes happen in
Fillout's own editor.

## Routes

`/` · `/about/` · `/services/` · `/resources/` (pricing + FAQs) · `/contact/`

These slugs match the previous WordPress site and must be preserved for SEO. `/intake/`
301s to `/contact/` (router + `netlify.toml`).

## Deploy

Netlify project `rising-tide-counseling`. `netlify.toml` lives at the parent repo root and
builds this directory. Draft previews: `npx netlify-cli deploy --build`.

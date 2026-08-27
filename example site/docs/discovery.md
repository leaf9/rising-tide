# Wildflower Collective — Discovery & Audit

**Client:** Wildflower Collective LLC — Collaborative Counseling and Wellness
**Domain:** meetwildflower.com
**Audited:** August 25, 2026
**Prepared by:** Leaf9

---

## 1. The business

- **Who:** A group therapy practice founded and led by **Carolyn Button, LCSW-C**, with two
  associate clinicians: **Amanda Priestly, LGPC** and **Logan Blake, LGSW**. LGPC/LGSW are
  Maryland pre-independent licenses, which confirms the practice's supervision/training model —
  Carolyn supervises early-career therapists toward independent licensure. This matters
  commercially: associate clinicians typically have open caseloads, so the site's real
  inventory to sell is *their* availability, not just Carolyn's.
- **Where:** In-person in **Easton, Maryland** (Eastern Shore), Monday–Friday, with late
  afternoons Mon/Tue. Telehealth for **Colorado** clients (Carolyn held a Boulder practice
  previously). Practice history: Baltimore 2015 → Boulder → Easton.
- **What:** Individual therapy (DBT + CBT) for pre-teens, teens, and adults (ages 10+);
  divorce/separation specialty (collaborative-divorce trained, IACP member); co-parent therapy
  and parent coaching; community **yoga** events (Carolyn is a 200-hr RYT — Corepower/Soulfire).
- **Money:** $200 intake (60 min) · $175 session (50 min) · $200 parent coaching.
  In-network with **CareFirst BCBS (Maryland, individual therapy only)**; out-of-network
  otherwise with superbills. Sliding scale and pro bono offered (stated on About page).
- **Booking stack:** SimplePractice (client portal at carolyn-parker.clientsecure.me).
  SimplePractice supports embeddable appointment-request widgets and prospective-client
  forms — the conversion machinery already exists and is simply not wired to the site.

## 2. Current-site audit

**Platform:** WordPress (Twenty Twenty-Five-era block theme, mostly default styling),
`index.php/` permalinks throughout.

### Broken and misconfigured (confirmed by crawl, Aug 25, 2026)

| # | Issue | Evidence |
|---|-------|----------|
| 1 | **Homepage "About us" CTA dead-ends.** It points to `carolynbutton.com`, whose redirect is misconfigured: `Location: https://meetwildflower.comindex.php/about` (missing slash) → DNS failure. The only styled CTA button on the homepage goes nowhere. | `curl -I carolynbutton.com/index.php/about` |
| 2 | **Carolyn's homepage headshot loads from the same broken domain** over `http://` — mixed content + broken redirect; the image fails for most visitors. | img src `http://carolynbutton.com/wp-content/…ButtonHS25-6434-scaled.jpg` |
| 3 | **Contact page is a clunky embedded Google Form.** (Correction from Ben, Aug 26: my text crawl read the page as empty because the form lives in an iframe.) The embed hides its submit button until you scroll, looks like it may require a Google login, and collects nothing into a proper lead flow. No phone, email, or address on the page around it. | Crawl of `/index.php/contact/` + Ben's review |
| 4 | **"Patient Portal" is two links.** "Patient" → simplepractice.com corporate homepage; "Portal" → the actual client portal. Half the clicks on the header's biggest button land on a SaaS marketing site. | Link extraction |
| 5 | **No H1, no meta description, no OG tags, no sitemap; robots.txt 404s.** Zero SEO scaffolding on a site whose clients search "therapist Easton MD." | `curl` head inspection |
| 6 | **Duplicated hero.** The hero is the logo at ~600px — directly under the same logo in the nav. Twice above the fold on mobile. | Screenshots |
| 7 | Footer links to wordpress.org; Instagram link is `http://` and points to Carolyn's personal yoga account. | Link extraction |

### Conversion audit

- **No headline anywhere.** The first words a visitor reads are nav labels. Nobody says
  what this is, who it's for, or where it is.
- **No CTA path.** No "book a consult," no phone number, no form, no email above the fold
  (the email appears once, buried mid-FAQ, and it's a gmail address). The one styled button
  is broken (issue #1).
- **The practice's best proof is invisible.** In-network with CareFirst (the dominant
  Maryland insurer), sliding scale, free 15-minute consult (mentioned only at the bottom of
  Amanda's bio), three therapists with open availability, in-person on the Eastern Shore
  where therapist supply is thin. None of this is on the homepage.
- **Massive dead space.** Multi-hundred-pixel empty cream bands between sparse sections;
  homepage is ~4,150px tall with maybe 900px of content.
- **Voice is first-person singular ("I", "my practice") everywhere** — a leftover from the
  solo-practice site. It actively contradicts the "Collective" brand and hides two
  bookable therapists.
- **One testimonial**, unstyled, attributed "-Patient Testimonial."

### Worth preserving

- The **logo** — genuinely good: watercolor wildflowers, warm cream, refined serif. The
  brand's visual story is already told here; the site just never picks it up.
- The FAQ content: pricing transparency, insurance clarity, session logistics. Honest and
  complete — it needs presentation, not rewriting.
- The three bios have real voice (especially Amanda's) — raw material for strong pages.
- Domain has minimal ranking equity (no meta, no sitemap, `index.php/` URLs), so a full
  rebuild loses little. 301 the eight existing `index.php/…` paths to their new clean URLs
  at launch; fix or park carolynbutton.com's redirect separately.

## 3. ICP

**Primary — "the researching mom" (35–55, Talbot County & Mid-Shore).** Searching for help
for her 12–17-year-old (anxiety, school stress, the fallout of a family divorce) or for
herself mid-separation. Arrives evening, on her phone, tabs open on 2–3 therapist sites and
Psychology Today. State of mind: worried, guilt-tinged, decision-fatigued. Objections:
*Will my kid connect with this person? Can I afford it / take my insurance? How soon can we
be seen? Is this practice legit?* She converts on warmth + credentials + logistics answered
fast.

**Secondary — adults in divorce/transition** (self-referred or attorney/collaborative-team
referred; the IACP membership brings professional referrals who need a credible page to
forward). **Tertiary — Colorado telehealth clients** (retention of an existing base, not an
acquisition target).

**The ONE conversion action: request a free 15-minute consult** (form → practice email /
SimplePractice prospective-client flow). Phone number as the secondary path for the
call-first generation; the SimplePractice portal remains a header utility for existing
clients, clearly separated from the new-client CTA.

## 4. Outcome goals

- **Primary metric:** consult requests submitted (form fills + tracked tel: taps). Baseline
  is effectively zero attributable to the site; target 8–12/month within 90 days of launch.
- **Supporting:** "therapist Easton MD" / "teen therapist Eastern Shore" first-page presence
  (currently unranked with zero on-page SEO); < 3s mobile load; every page reachable in ≤ 2
  taps; zero broken links.
- **Brand goals:** read as a *collective* — warm, credentialed, unmistakably local; make the
  wildflower identity do real work instead of sitting in a circle at the top of a beige page.

## 5. Competitive set (Mid-Shore / Talbot County)

The local field is thin and visually dated — a real opening:

1. **Eastern Shore Psychological Services (espsmd.com)** — large multi-site group (Salisbury
   et al.), clinical/institutional presentation; comprehensive but cold, directory-style.
2. **Bay Area Counseling / small Easton private practices** — mostly template sites
   (Wix/SquareSpace/TherapySites): stock photos of docks and Adirondack chairs, muted
   sage-and-beige palettes, "A Peaceful Place to Heal" headlines.
3. **Psychology Today profiles** — the de-facto competitor for every local therapy search;
   converts via clear specialty tags, fees, insurance, and a photo. The site must answer
   the same questions faster and warmer than a PT profile.
4. **For the Love of Wellness Counseling and Wellness Center (Easton)** — the closest
   in-town wellness-positioned rival; more service breadth, generic wellness aesthetic.
5. **Chesapeake-area collaborative divorce professionals** (attorney-adjacent referral
   sites) — relevant for the co-parenting line; dry, professional, zero warmth.

**Positioning gap:** nobody in this market pairs *genuine visual warmth* with *fast,
transparent logistics* (fees, insurance, availability, three faces). The watercolor brand +
radical clarity is a lane no local competitor occupies.

## 6. Constraints & notes

- Brand is **existing and mandated**: the wildflower logo and its palette are the anchor.
- HIPAA-adjacent care in copy and forms: no PHI collected on-site; consult form stays
  minimal (name, contact, "what brings you here" optional); add a "not for emergencies —
  call/text 988" note near forms.
- Testimonial use in therapy marketing is ethically constrained (social-work code); prefer
  credential/process proof over soliciting client quotes.
- Tech: static Vite build (fast, cheap, Netlify-ready) — no WordPress. Config-driven copy
  per Leaf9 defaults; tracking + UTM-ready CTAs from day one.
- carolynbutton.com redirect fix is a 15-minute server correction the client should make
  regardless of this project (add the missing `/` in the Apache RewriteRule target).

---

**Phase 1 gate check:** ICP defined ✓ · One conversion action defined (free-consult
request) ✓ · Measurable goals set ✓ · Differentiation test: this document names Easton,
CareFirst, IACP, LGPC-supervision economics, and a broken carolynbutton.com redirect — it
could not be swapped to another client. ✓

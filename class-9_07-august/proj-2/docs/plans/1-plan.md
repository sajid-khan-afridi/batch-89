# Portfolio Website — `class-9_07-august/proj-2`

## Context

`proj-2/` is empty. Sajid wants a personal portfolio website built there — a fresh build
for class-9, presenting him as a PIAIC AI instructor / developer with a clear way to hire
or contact him.

A previous portfolio exists at `class-7_24-july/proj1/` (dark, animated, vanilla
HTML/CSS/JS). It is the reference for **content**, not for code: this is a rebuild, written
from scratch, not a copy. Two things it got wrong that this build fixes:

- Project cards point at `assets/project-placeholder-1.jpg` etc., which were never created —
  the page shows broken-image icons on first open.
- No `prefers-reduced-motion` handling on a heavily animated page.

Confirmed with the user:

- **Stack:** plain HTML/CSS/JS, three files, zero dependencies.
- **Content:** Sajid's real details; reuse the profile photo from class-7.
- **Theme:** dark, animated — same 2026 direction, rebuilt.

Dependency-free matters because students open this by double-clicking `index.html` on their
own machines — no Node.js, no npm, no CDN, works offline.

## Files to create in `proj-2/`

| File | Purpose |
| --- | --- |
| `index.html` | Semantic single-page structure, all sections |
| `styles.css` | Dark theme, layout, all animations |
| `script.js` | Scroll-reveal, mobile nav, rotating role, stat counters, active link |
| `assets/profile.jpg` | Copied from `class-7_24-july/proj1/assets/profile.jpg` (348 KB, already web-optimized) |
| `README.md` | How to open it, and where the `<!-- EDIT -->` placeholders are |

## Sections

1. **Navbar** — `Sajid.dev` logo, anchor links, "Hire Me" button. Sticky, blurs on scroll,
   hamburger below 768px.
2. **Hero** — name in gradient text, rotating role line (AI Instructor → Python Developer →
   Educator), one-line intro, View Work / Hire Me buttons, profile photo in an animated glow
   ring, scroll indicator.
3. **About** — bio (PIAIC instructor, AI/Python educator) plus three stat cards that count up
   on reveal: 500+ students, 6+ batches, 3+ years.
4. **Skills** — bento grid (Python, AI/ML, JavaScript, Teaching, Web Development) and an
   auto-scrolling marquee of tech badges.
5. **Projects** — three glass cards with title, description, tags, Live Demo / Source links.
   **Each card's visual is a CSS gradient panel with the project initial** — no `<img>`, so
   nothing is broken before the user adds real images. README explains how to swap in an
   image.
6. **Contact** — email `sajid.ess2020@gmail.com`, GitHub and LinkedIn links, prominent
   "Hire Me on LinkedIn" button.
7. **Footer** — copyright with JS-filled year, quick links.

## Design direction

- **Aurora background** — three slowly drifting blurred colour blobs over a near-black base
  (`#0A0A0F`), fixed behind content, `aria-hidden`.
- **Glassmorphism cards** — `backdrop-filter: blur()`, semi-transparent fill, hairline border,
  subtle lift on hover.
- **Accent** — violet → cyan gradient, used for the logo dot, gradient text spans, button
  glow, and section eyebrows. One gradient, reused everywhere.
- **Kinetic type** — large clamped hero heading, animated gradient fill, JS-driven rotating
  role with fade transition.
- **Scroll reveal** — `.reveal` elements start translated/transparent, IntersectionObserver
  adds `.visible`. Staggered via `transition-delay` on grid children.
- Fully responsive: single-column below 768px, hamburger nav, fluid type via `clamp()`.

## Implementation notes

- **CSS custom properties** in `:root` for colours, spacing, radii, and the accent gradient —
  one place to retheme, which is the point for a teaching repo.
- **`prefers-reduced-motion: reduce`** media query disables aurora drift, marquee, and reveal
  transitions; reveal elements render visible immediately so no content is hidden.
- **Marquee** duplicates its badge list, second copy `aria-hidden="true"`, translated -50% for
  a seamless loop. Pauses on hover.
- **`script.js`** — plain functions, no classes, no libraries: `initNav()`, `initReveal()`,
  `initRotatingRole()`, `initCounters()`, `initActiveLink()`, plus setting the footer year.
  Every animation guarded by a reduced-motion check.
- **Placeholders** marked with `<!-- EDIT: ... -->` comments — LinkedIn URL, GitHub URL, bio
  wording, stat numbers, project details. LinkedIn/GitHub hrefs stay `#` until the user
  supplies them.
- Smooth scrolling via CSS `scroll-behavior: smooth` with `scroll-padding-top` for the sticky
  navbar — no JS scroll hijacking.

## Verification

1. `node --check proj-2/script.js` — catch syntax errors before opening.
2. Open `proj-2/index.html` directly in the browser (double-click, no server) and confirm:
   - Aurora blobs drift; hero heading gradient animates; role text rotates.
   - Sections fade in on scroll; stat numbers count up once when About enters view.
   - Skills marquee scrolls seamlessly and pauses on hover.
   - Project cards show gradient panels — **no broken image icons anywhere**.
   - Profile photo loads from `assets/profile.jpg`.
   - Nav links smooth-scroll and the active link highlights while scrolling.
3. Resize to ~375px wide: hamburger appears, menu opens/closes, layout is single-column, no
   horizontal scrollbar.
4. In DevTools, emulate `prefers-reduced-motion: reduce` and reload — all content visible and
   readable, no motion.

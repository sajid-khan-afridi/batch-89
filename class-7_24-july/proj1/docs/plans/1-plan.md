# Portfolio Website — Sajid Khan Afridi

## Context
Sajid wants a personal portfolio website. `proj1` is currently empty, so this is a
greenfield build. He teaches PIAIC batch-89 (AI courses), so the site should present him
as an AI instructor / developer and give visitors a way to hire/contact him.

Decisions confirmed with the user:
- **Stack:** Plain HTML/CSS/JS (no build tools, no dependencies) — but with **heavy
  animation and a trending 2026 look**.
- **Sections:** Hero + About, Skills, Projects, Contact, and a **"Hire Me"** call-to-action
  linking to LinkedIn.
- **Theme:** Modern dark theme.

Keeping it dependency-free means it opens by double-clicking `index.html`, works offline,
and runs on any student's machine — no Node.js or CDN required. All animation is done with
CSS + a little vanilla JS (Intersection Observer), so nothing to install.

## Files to create (in `proj1/`)
- `index.html` — semantic single-page structure, all sections.
- `styles.css` — dark theme, layout, and all animations.
- `script.js` — scroll-reveal, mobile nav toggle, active-link highlighting, small interactions.
- `assets/` — contains the real profile photo `profile.jpg` (Sajid at his laptop, suit — web-optimized to 1200×1600, ~340 KB). Project images are still placeholders the user drops in.
- `README.md` — short note on how to edit content and where the placeholders are.

## Design direction (2026 trending, dark)
- **Aurora / gradient-mesh background** — soft animated color blobs behind a near-black base.
- **Glassmorphism cards** — frosted, semi-transparent panels with subtle borders.
- **Bento-grid** layout for Skills and Projects.
- **Kinetic hero typography** — large heading with an animated gradient text and a
  typing/rotating role line (e.g. "AI Instructor" → "Python Developer" → "Educator").
- **Scroll-reveal** — sections fade/slide in via Intersection Observer.
- **Magnetic / glow buttons** and smooth-scroll navigation.
- **Skills marquee** — auto-scrolling row of tech badges.
- Accent: an electric gradient (e.g. violet→cyan). Fully responsive (mobile hamburger nav).

## Section breakdown
1. **Navbar** — logo/name, anchor links, "Hire Me" button. Sticky + blur on scroll.
2. **Hero** — name, animated rotating role, one-line intro, CTA buttons (View Work / Hire Me), real profile photo (`assets/profile.jpg`) with animated glow ring.
3. **About** — short bio (PIAIC instructor, AI/Python educator), a few highlight stats (students taught, batches, years).
4. **Skills** — bento grid + marquee of technologies (Python, AI/ML, JS, etc.).
5. **Projects** — 3–6 glass cards with title, description, tags, and links (placeholder projects to edit).
6. **Contact / Hire Me** — email (sajid.ess2020@gmail.com), social links, and a prominent
   LinkedIn "Hire Me" button.
7. **Footer** — copyright + quick links.

## Placeholders the user fills in later
Clearly marked with `<!-- EDIT -->` comments:
- Profile photo is already in place (`assets/profile.jpg`). Only project images in `assets/` are placeholders.
- **LinkedIn URL** (for the Hire Me link) and GitHub URL — currently `#` placeholders.
- Real project titles/descriptions/links.
- Bio wording and stat numbers.

## Verification
- Open `proj1/index.html` directly in a browser (just double-click the file) — no server needed.
- Check: hero animation plays, rotating role cycles, sections reveal on scroll, skills
  marquee scrolls, Hire Me button is visible, layout works at mobile width (resize / dev tools),
  and all nav links smooth-scroll to their sections.

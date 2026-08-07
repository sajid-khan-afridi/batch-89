# Slide decks

This folder is reserved for slide creation. When asked to create a slide deck here, follow these rules.

## Output

- **One self-contained `index.html` file.** All CSS and JS inline. No CDN links, no npm, no build step, no external images or fonts — it must open by double-click on any student's machine, offline.
- 16:9 layout that scales to the viewport. Arrow keys and Space advance, a visible slide counter, and it must survive browser print-to-PDF.
- If a deck already exists in the folder, ask before overwriting.

## Audience — non-technical

This is the constraint that outranks the others. Every deck is for people with no technical background.

- Plain language. If a term needs a definition, either define it on the slide in one line or cut it.
- Analogies and real-world examples instead of code. No code blocks, no terminal output, no architecture diagrams full of acronyms.
- One idea per slide. If a slide needs two breaths to explain, split it.
- Slide count follows the topic — no fixed number, no padding to hit a count.

## Visual style — light mode, 2026

- **Ground:** warm off-white (`#FAFAF8`–`#F6F5F2`), never pure `#FFF`. Text is near-black warm grey (`#1A1A18`), not `#000`.
- **One accent colour**, used sparingly — a single highlighted word, a rule, a key number. Never a rainbow.
- **Type carries the design.** Large confident headings, tight letter-spacing, real weight contrast between heading and body. Body text never below 20px at presentation scale. System font stack only (`ui-sans-serif, -apple-system, "Segoe UI", ...`) since no external fonts are allowed.
- **Soft depth, not skeuomorphism:** large corner radii, hairline borders, very subtle shadows. Optional faint gradient or grain wash on title/section slides.
- **Generous whitespace on a consistent grid.** Wide margins, aligned edges across slides. Empty space is the point, not a gap to fill.
- Avoid: clip art, stock photos, drop shadows on text, more than two type sizes per slide, bullet lists longer than four items.

## Structure

Title → why this matters to the audience → the content slides → one takeaway slide. Section dividers if the deck runs long.

# Spec-Driven Development: A Practical Guide

### Building a Quran App for Android & iPhone in 3 Claude Code Sessions

> **What this is:** a hands-on, copy-paste runbook for the four-phase SDD loop — **Constitution → Research → Specify → Clarify → Build** — validated against the [Spec-Driven Development Crash Course](https://agentfactory.panaversity.org/docs/spec-driven-development-crash-course) (The AI Agent Factory).
>
> **What this is not:** a theory lesson. Read the crash course for the *why*. This guide is the *how*, in order, with every prompt ready to copy.

---

## Table of Contents

| Step | Session | Phase | What you produce |
|---|---|---|---|
| [Step 0](#step-0--get-the-starting-template) | — | Setup | A repo on your machine |
| [Step 1](#step-1--session-1--phase-0-the-constitution) | Session 1 | Phase 0 · Constitution | `CLAUDE.md` + `rules/` |
| [Step 2](#step-2--session-2--phases-1-3-research--specify--clarify) | Session 2 | Phases 1–3 | `research.md`, `spec.md` |
| [Step 3](#step-3--session-3--phase-4-plan--tasks--implement) | Session 3 | Phase 4 · Build | `plan.md`, `tasks.md`, working code |

Plus: [Checklists](#checklists) · [Session hygiene](#session-hygiene) · [Validation notes](#validation-notes)

---

## Before You Start

**The one rule that makes this work:** you agree on the **what** before the agent generates the **how**. Every prompt below either sharpens that agreement or enforces it.

**Ground rules for the whole run:**

- **No code until Step 3.** Phases 0–3 produce documents only. If Claude starts writing implementation early, stop it and point back at the phase.
- **One session per step.** Fresh context per phase keeps the agent lean and keeps you honest.
- **Plan mode is your gate.** `Shift+Tab` puts Claude Code in read-only: it can read your repo and draft, but cannot write a line until you approve. Use it wherever this guide says *plan mode*.
- **Review, don't author.** Once the plan is approved, the agent decomposes the work. Your job is to review the breakdown and check each step against the spec.

---

## Step 0 — Get the Starting Template

Clone or download the repo:

```bash
git clone https://github.com/sajid-khan-afridi/sdd_starting_template
```

🔗 <https://github.com/sajid-khan-afridi/sdd_starting_template>

Then open the folder in Claude Code and confirm you can see `CLAUDE.md` before you send a single prompt.

---

## Step 1 — Session 1 · Phase 0: The Constitution

**Goal of this session:** write the project-wide rules that sit *above* every spec and every build — then make them cheap to load.

**Why it matters:** the constitution is persistent context, not enforced law. It is re-read constantly, so bloat is expensive and buries the rules that actually bite. Keep it tight; back the must-never rules with hooks or tests later.

### Prompt 1.1 — Draft the constitution into `CLAUDE.md`

```text
Just focus to add and structure it with sections — Principles, Constraints, Definition of done and Project structure plus **best practices of CLAUDE.md in official documentation according to the this current app** in @CLAUDE.md. I want to create a **Quran app for android and iphone**. We will design and develop the **Quran app for android and iphone** using Spec-Driven Development.
```

**What to check in the output:**

- [ ] Sections present: **Principles**, **Constraints**, **Definition of done**, **Project structure**
- [ ] Every line passes the test: *would removing it let the AI make a mistake?* ("Write clean code" fails. "Never touch `assets/mushaf/`" passes.)
- [ ] Matched to the stakes — a too-strict constitution turns a mobile app into a cathedral, because every later phase inherits its weight

---

### Prompt 1.2 — Propose a leaner `CLAUDE.md` (proposal only)

Run this at the **end** of the session, once the constitution has grown.

```text
just give the proposal and do not implement it. """How to minimize the size of claude.md and shift the contents which does not need to load in every session. Shift to rules folder and add reference of it in cluade.md."""
```

**What to check in the output:**

- [ ] Only *always-true* rules stay in `CLAUDE.md`
- [ ] Situational detail (platform specifics, Arabic text & font handling, audio/recitation rules, release checklists) moves to `rules/`
- [ ] `CLAUDE.md` references the moved files so Claude can pull them **on demand**, not every turn

---

### Prompt 1.3 — Apply it

```text
implement it now
```

**End-of-session artifacts:**

```text
CLAUDE.md          ← the constitution, trimmed
rules/             ← the detail, loaded only when needed
  ├── ...
  └── ...
```

---

## Step 2 — Session 2 · Phases 1–3: Research → Specify → Clarify

**Goal of this session:** turn a fuzzy idea into a written agreement precise enough that a stranger could build it without asking you anything.

Start a **fresh session** so the constitution loads clean.

### Prompt 2.1 — Phase 1: Research (use subagents, sized to the research)

Subagents each investigate one area in their own context window and hand back a summary — so your main session stays lean.

```text
Research 2026 trends on what's involved in building [Quran app for android and iphone]. Investigate these separately and report each on its own: (1) how this kind of thing is usually done, (2) the main approaches and their trade-offs, (3) anything in our existing project it has to fit, (4) the failure modes and edge cases I should worry about. Give me a one-page findings doc: what exists, the options, and what's still unknown. Don't propose a final design or write any code yet.
```

**What to check in the output:**

- [ ] It is a **findings doc**, not a design and not code
- [ ] The four areas are reported **separately**, not blended into one narrative
- [ ] The "still unknown" section is real — if it is empty, the research was too shallow
- [ ] Domain-specific failure modes surfaced (script rendering, verse numbering conventions, offline audio, translation licensing) — the ones you had not considered are the point

---

### Prompt 2.2 — Phase 2: Specify (use plan mode)

`Shift+Tab` into plan mode first. The "don't build yet" rule is now enforced by the tool instead of your willpower.

```text
Using the research above and our constitution, draft spec.md for [Quran app for android and iphone]. Include in sub-headings: **Goal | Problem Statement -- the why. 2-3 sentences**, **User Scenarios -- when a user does X...**, **Functional Requirements -- what are the exact things in your app**, **edge cases & rules**, **out-of-scope**, **acceptance criteria** and **open questions**. Describe behaviour only, no databases,no frameworks, or no file layout. Make each requirement specific enough that a build which ignored it would visibly fail. The spec.md should be non technical. Descript behaviour only, no code yet.
```

**What to check in the output:**

- [ ] **No HOW anywhere** — no database, no framework, no file layout. All of that is the plan, in Step 3.
- [ ] Every requirement survives the precision test: *could a competent person build the wrong thing and still technically satisfy this line?* If yes, tighten it.
- [ ] **Out of scope** is filled in, not skipped — this single section prevents most "it did too much" failures
- [ ] **Open questions** are listed rather than silently answered — they feed straight into the next prompt

**Tighten by hand.** Watch one requirement earn its keep:

| Before | After |
|---|---|
| "Users can bookmark a verse." | "A signed-out user can bookmark any verse; bookmarks persist across app restarts, survive reinstall only if the user is signed in, and a bookmarked verse shows a filled marker in the reading view." |

The first would pass a build that loses every bookmark on restart. The second can only pass the thing you meant.

---

### Prompt 2.3 — Phase 3: Clarify (make the AI interview *you*)

This is the highest-value, most-skipped step. Fixing a mistake here costs a sentence; fixing it after implementation costs a rebuild.

```text
Before we build anything, interview me about this spec. Ask one question at a time in simple terms and concisely with recommended answer and convincing style, focusing on ambiguities, missing edge cases, and unstated assumptions. Keep going until you could hand this spec to a stranger and trust they'd build exactly what I mean. Don't write any code yet.
```

**What to check in the output:**

- [ ] **One question at a time** — if it dumps a list, tell it to slow down
- [ ] Each question arrives with a **recommended answer**, so you can approve rather than compose
- [ ] Every answer gets **folded back into `spec.md`**, not just left in the chat
- [ ] Count the decisions you never thought to state. That number is why SDD exists.

---

### Prompt 2.4 — End-of-session constitution upkeep (proposal only)

```text
just give the proposal and do not implement it.Firstly, step-1 what things or decisions or content from above session need to be in claude.md. Secondly, step-2 how the content from step-1 should be placed in rules folder and add reference of it, in order the content which does not need to load in every session.
```

---

### Prompt 2.5 — Approve

```text
yes recommended
```

**End-of-session artifacts:** `research.md`, `spec.md` (clarified), updated `CLAUDE.md` + `rules/`.

---

## Step 3 — Session 3 · Phase 4: Plan → Tasks → Implement

**Goal of this session:** generate the *how* from the agreed *what*, in small checkable steps.

Start a **fresh session**. Right-size the process: a one-line fix needs no plan; a multi-file build like this one earns the full loop.

### Prompt 3.1 — `plan.md` (use plan mode)

```text
Based on the agreed spec, propose a technical plan: stack, structure, and the key decisions, each with its trade-off. Match our constitution and reuse what already exists rather than adding new dependencies. Don't write code yet; I'll review the plan first.
```

**What to check in the output:**

- [ ] Every key decision carries an explicit **trade-off**, not just a choice
- [ ] It **reuses** what exists rather than adding dependencies — the constitution said so
- [ ] You can trace each part of the plan back to a requirement in `spec.md`
- [ ] Review the plan *before* any code. This gate exists because agents are non-deterministic: ask five times, get five designs.

---

> ## ⚙️ Optional Steps
>
> Everything below the line is optional. In Claude Code the agent maintains its own tracked task list and works through it, so a hand-written `tasks.md` is not required. Add it when you want the task list to be **version-controlled, reviewable in a PR, and portable** across sessions or tools.

### Prompt 3.2 — `tasks.md` *(optional)*

```text
Break the approved plan into an ordered, checkable task list, each task tagged with the functional requirement it satisfies. Track it as you go — the breakdown gets reviewed, not authored, by the human. Do not implement it yet, just create a tasks.md file along plan.md file. Do not implement it yet.
```

**What to check in the output:**

- [ ] Every task cites the requirement it satisfies — `[FR-3]`, `[FR-7, edge]`
- [ ] The final task is **verification**, derived straight from the acceptance criteria
- [ ] Tasks are small enough that one commit closes one task

---

### Hook — auto-tick completed tasks *(optional)*

If a step must happen every time, don't rely on a written rule — enforce it with a hook.

```text
create a hook which trigger when session ends(or /clear) during executing or implementation of tasks.md then it **MUST** checked or tick the completed tasks in this session.
```

**What to check in the output:**

- [ ] It fires on session end **and** on `/clear`
- [ ] It only ticks what was actually completed in that session — no optimistic checking
- [ ] It fails loudly rather than silently, so you notice when it doesn't run

---

### Prompt 3.3 — Implement

Run until context fills to roughly **70–80%**, then `/clear` and continue in a fresh session. The hook above is what makes that safe.

```text
implement all phases
```

**OR** — the safer pace for a first run:

```text
implement phases 1 and 2
```

**What to check as it builds:**

- [ ] **Commit after each task**, so every step has a clean rollback point
- [ ] Check each step against the spec — verify is never the step you skip
- [ ] Found a gap mid-build? **Fix the spec first**, then continue. The spec stays true.
- [ ] Every few cycles, run a separate design pass: ask which files were touched, where a rule is now written twice, which names no longer describe what they do — then read that code yourself

---

## Checklists

### Is my spec done?

- [ ] **Goal / Problem statement** — the why, in 2–3 sentences
- [ ] **User scenarios** — "when a user does X, they get Y"
- [ ] **Functional requirements** — each specific enough that ignoring it fails the build
- [ ] **Edge cases & rules** — empty, huge, duplicate, malformed, unauthorized
- [ ] **Out of scope** — what this explicitly does *not* do
- [ ] **Acceptance criteria** — the checklist that says "done"
- [ ] **Open questions** — answered by the Clarify interview, then folded in
- [ ] **No HOW** — no database, framework, or file layout

### Artifacts you end up with

```text
CLAUDE.md          ← constitution (Phase 0)
rules/             ← constitution detail, loaded on demand
specs/
  ├── research.md  ← Phase 1
  ├── spec.md      ← Phases 2–3
  ├── plan.md      ← Phase 4
  └── tasks.md     ← Phase 4 (optional)
```

Plus the working app — and, more valuable, a spec that explains and governs it.

---

## Session Hygiene

| Habit | Why |
|---|---|
| One phase per session | Fresh context per phase; the agent stays lean and you stay honest |
| `/clear` at 70–80% context | Quality degrades as context fills; clear before it does, not after |
| Plan mode for Specify and Plan | The read-only gate enforces "agree before you build" |
| Commit after every task | `git log` reads like the task list; every step is a rollback point |
| Spec changes ship in the same commit as the code | The cheap, boring fix for spec drift |

**The failure mode to watch for:** someone tweaks behaviour directly in code and ships it. The spec still describes the old behaviour. Weeks later, a teammate reads the spec, "fixes" the code to match, and quietly breaks the working thing. Nobody lied — the spec just stopped being true.

---

## Validation Notes

Checked against the [Spec-Driven Development Crash Course](https://agentfactory.panaversity.org/docs/spec-driven-development-crash-course).

**Aligned with the crash course:**

| This guide | Crash course |
|---|---|
| Session 1 → Constitution with Principles / Constraints / Definition of done | Concept 4 — the constitution, same section shape |
| Session 2 → Research, Specify, Clarify, in that order | Concepts 5–7 — the same three phases, same order |
| "Describe behaviour only, no databases, frameworks, or file layout" | Concept 6 — the HOW belongs in the plan, not the spec |
| Interview one question at a time before any code | Concept 7 — the highest-value, most-skipped step |
| `tasks.md` marked **optional** | Concept 8 / 10 — in Claude Code the agent tracks its own list; you review, not author |
| Hook to enforce end-of-session task ticking | Concept 10 — if it must happen every time, enforce it with a hook |
| Plan mode as the Specify gate | Concept 10 — `Shift+Tab` is the read-only gate |
| Subagents for research | Concepts 5 & 10 — parallel research without polluting context |

**Extensions beyond the crash course** (deliberate, and consistent with it):

- **`rules/` folder + references in `CLAUDE.md`** — a Claude Code progressive-disclosure practice. Follows directly from the crash course's warning that constitution bloat is expensive because the agent re-reads it every session.
- **The 70–80% context threshold** — a context-discipline habit from agentic coding practice, not a number the crash course states.
- **"Open questions" as a spec sub-heading** — the crash course lists six sections; this adds a seventh that feeds the Clarify interview.
- **"Research 2026 trends"** — adds a recency requirement to the standard research prompt.

**A note on the prompts:** every prompt in this guide is reproduced **word for word**, including its original phrasing and typos. Only stray escape characters from the source paste (`\*\*` → `**`) were normalized so the prompts copy cleanly. Nothing was reworded, added, or removed.

---

## Where This Leads

You now have the loop: **agree on the *what*, generate the *how*, then go look at what came out.**

Run it once end to end and the discipline becomes yours — usually at the moment the Clarify interview catches a decision you would otherwise have shipped as a bug. When you want the next level, don't just tell the agent to add a feature: **edit `spec.md` first**, re-run Clarify on the changed section, update the plan, then implement. That is the jump from Spec-First to Spec-Anchored, and it is the one most people never practise.

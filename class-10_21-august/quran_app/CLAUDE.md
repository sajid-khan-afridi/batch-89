# CLAUDE.md


@.claude/rules/file_structure_rules.md

## Principles

- **Spec-Driven Development (SDD).** No feature is coded before it has a spec. The order is always research (if needed) → spec → plan → tasks → implementation.
- **Cross-platform by default.** This is a Quran app for **Android and iPhone**. Every feature must work on both platforms; platform-only behavior must be called out explicitly in its spec, not assumed.
- **Sequential, numbered features.** Specs are numbered (1, 2, 3, ...) per `.claude/rules/file_structure_rules.md`. Build and finish one feature at a time; don't jump ahead to the next spec unless the user asks to.
- **Minimal scope.** Implement exactly what the spec says — no bonus features, no speculative abstractions, no "while I'm here" additions.
- **Teaching-project friendly.** This repo belongs to a PIAIC batch-89 class. Favor approaches a student can read, reproduce, and run on their own machine over clever shortcuts that only work in this environment.

## Constraints

- **Target platforms:** Android and iOS only. No web/desktop-only work unless a spec explicitly scopes it that way.
- **Tech stack: not yet chosen.** Do not assume React Native, Flutter, or native Swift/Kotlin. The framework decision belongs in the first spec/plan for the project, not in this file or in ad-hoc code.
- **No code without a spec.** Every non-trivial change traces back to a `spec.md` (and `research.md` / `plan.md` / `tasks.md` where applicable) under `.claude/specs/`, following the research → spec → plan → tasks order.
- **No paid or account-gated services** by default (APIs, hosting, Quran text/audio sources) unless a spec explicitly justifies one — everything must be runnable by a student without special access.
- **Quran text/audio integrity.** Any Quran text, translation, or recitation source used must be clearly identified and unmodified — never paraphrase or auto-generate Quranic text.

## Definition of Done

A feature is done only when:

- [ ] `research.md` exists if the feature needed investigation (APIs, libraries, data sources)
- [ ] `spec.md` exists and states intent + acceptance criteria
- [ ] `plan.md` exists and was followed (deviations noted inline)
- [ ] `tasks.md` exists and breaks the plan into discrete, checkable tasks, each checked off as completed
- [ ] The implementation matches the plan and has been run/verified on both Android and iOS — not just reviewed as code
- [ ] Nothing beyond the spec's scope was added
- [ ] The user has reviewed and accepted the result

## Project Structure

```
.claude/
  rules/                     # project-wide rules Claude must follow (checked in)
  specs/
    N-feature-name/          # N = sequential: 1, 2, 3, ...
      research.md            # research conducted on the feature
      spec.md                # what the feature is and why
      plan.md                # implementation plan against spec.md
      tasks.md               # plan broken into discrete, checkable tasks
  hooks/                     # prompt/question auto-logging
  settings.json
docs/
  prompts/                   # auto-logged session prompts
```

App source code has no structure yet — it will be defined by whichever spec/plan chooses the tech stack and initializes the project.

## Maintaining this file (Claude Code official best practices, applied here)

- Keep this file short and high-signal — it's loaded into every session's context, so every extra line has a recurring cost.
- Prefer bullet points to prose; use **bold**/`IMPORTANT` only for rules that are easy to violate by accident (e.g. skipping straight to code).
- Don't duplicate `.claude/rules/*.md` content here — import it (see the `@` import at the top of this file) or reference it by path instead.
- Sections like bash commands, code style, and testing instructions are intentionally omitted for now — add them once the first spec picks a tech stack, rather than guessing.
- Treat this file as a living prompt: when a correction or preference comes up mid-session, update it immediately instead of relying on memory alone.

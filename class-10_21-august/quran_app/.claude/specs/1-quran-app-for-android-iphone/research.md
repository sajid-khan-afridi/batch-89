# Research: Quran App for Android + iPhone — 2026 Landscape

Scope: pure findings — what exists, the options, and what's unknown. No tech-stack decision, no design, no code. Feeds the eventual `spec.md`/`plan.md` for this feature.

## 1. How this is usually done

- **Tech stacks actually used in this niche:** Flutter and React Native dominate real-world open-source Quran apps (e.g. `radensaleh/Quran-App` [Flutter], `ihsaninh/Al-Quran-mobile-react-native`). Kotlin Multiplatform and .NET MAUI show up in general 2026 mobile-trend pieces but **no evidence of either being used for a Quran app specifically yet**. Native dual-codebase (Swift+Kotlin) is not a common pattern here either.
- **Standard data sources:**
  | Source | Provides | License notes |
  |---|---|---|
  | [Quran Foundation API](https://api-docs.quran.foundation/) | verses, translations, tafsir, audio, search | free credential; content can't be resold/redistributed outside the app; access is revocable at their discretion |
  | [Al Quran Cloud](https://alquran.cloud/api) | text, translations, audio | free, key-less, soft rate limit |
  | [Tanzil.net](https://tanzil.net/docs/text_license) | verified Arabic text corpus | CC BY 3.0 — verbatim only, **no altering text**, attribution + backlink required |
  | [Quranic Arabic Corpus](https://corpus.quran.com/download/) | word-by-word morphology | free download |
  | EveryAyah.com / mp3quran.net | per-ayah/per-reciter audio | free hosting; **no formal license text found** for the audio itself (gap, not confirmed permissive) |
  | KFGQPC Uthmanic fonts | Mushaf al-Madinah glyphs | free to use/distribute; **cannot be modified, reverse-engineered, or sold** |
- **Typical feature baseline:** offline reading without forced pre-download, tajweed color toggle, word-by-word tap translation, dozens of translations/tafsirs, bookmarks, Arabic+translation search.
- **Typical architecture:** hybrid — core Arabic text (+ often one translation) bundled/cached locally (SQLite), additional translations/tafsirs/reciters fetched and cached on demand. Pure-bundle and pure-API-only both exist but hybrid is the most common pattern in real implementations.

## 2. Main approaches and trade-offs

| Dimension | Native (Swift+Kotlin) | Flutter | React Native/Expo | KMP + Compose MP | .NET MAUI |
|---|---|---|---|---|---|
| Arabic RTL/diacritics | Own bugs (SwiftUI Arabic list/text-field bugs reported) | Open diacritic-placement bugs, patched via community packages | Open RTL/`I18nManager` bugs, esp. iOS | RTL "stable" per JetBrains but an open issue says it doesn't work on iOS in some configs | Most consistently broken: iOS `FlowDirection` often ignores Arabic locale |
| Audio/offline | Manual | Mature (`just_audio`+`audio_service`) | Mature (`react-native-track-player`) | Newer, hand-wired per platform | Newer, hand-wired |
| Classroom fit | Two languages/toolchains — highest friction | Single language, best tutorial volume, official Windows support | Single language, familiar if students know web React; Expo hides native details | Steeper — Kotlin+Xcode familiarity needed | Least likely to have student familiarity |
| iOS distribution | Needs Mac | Needs Mac | Needs Mac | Needs Mac | Needs Mac |
| 2026 trend | Flat | ~46% share, dominant | ~35-42% share | Growing fast (7%→23% in 18mo) but iOS target only stabilized May 2025 | No strong 2026 growth signal found |

- **Universal finding, not framework-specific:** every option has open, documented Arabic-rendering bugs right now. None of the five "just works" for Arabic script — the mitigation (a specific shaping library, or pre-rendered page images for tajweed, as several shipped apps do) is an app-level decision independent of framework choice.
- **iOS distribution is a hard constant across all five options:** building/signing for iOS requires macOS somewhere (real, rented, or CI) **and** a $99/year Apple Developer account for any signed distribution (even TestFlight). This is an Apple platform requirement, not a framework limitation.
- **Data architecture (bundle vs. API vs. hybrid) is orthogonal to the framework choice.** Since Quran text never changes, "fetch once, cache forever" for text + on-demand per-reciter caching for audio is what real apps converge on; full-bundle maximizes offline reliability but is hardest to patch; API-only minimizes size but has zero offline guarantee and depends on third parties with no published uptime SLA.

## 3. Fit with our existing project

- The repo currently has **no app code and no other specs** — this is feature 1, so there's nothing existing to conflict with structurally.
- Hard constraints from `CLAUDE.md` that any future option must satisfy: Android **and** iOS both work, tech stack is still fully open, no paid/account-gated services **by default**, students must be able to run/reproduce it themselves, and Quran text/audio must come from a clearly identified, unmodified, unmodified-in-code source.
- **Direct tension already surfaced:** every path to iOS distribution requires a $99/year Apple Developer account — this collides with the "no paid or account-gated services by default" constraint. That's not something research resolves; it needs an explicit call in the spec (e.g. scope iOS distribution/testing differently, or explicitly justify the exception).
- Per `.claude/rules/file_structure_rules.md`, this file is filed as feature 1's `research.md`, ahead of a `spec.md` that doesn't exist yet — flagged per your instruction in case you intended `spec.md` literally.

## 4. Failure modes and edge cases

- **Text integrity:** diacritics (tashkeel) carry meaning — naive normalization, collation, or font substitution can silently corrupt a verse. Trusted sources (Tanzil) only reach that status via extraction → rule-based check → manual verification against the Medina Mushaf with per-letter checksums; skipping that pipeline (e.g. ingesting a scraped/OCR'd copy) is the main risk.
- **Rendering:** ligature/shaping and RTL-bidi bugs are a recurring, documented bug class in every framework tested (see §2). Tajweed color-coding is often sidestepped in shipped apps via pre-rendered page images rather than live-shaped text, precisely to avoid this.
- **Scholarly correctness:** Hafs and Warsh are different riwayat with real wording **and verse-numbering** differences — one shipped Warsh app broke search by hardcoding the other riwaya's numbering logic. Translation copyright varies per translation *and* per edition/jurisdiction (e.g. Yusuf Ali is public domain in some places, not others) — can't be assumed from the translator's name alone.
- **Audio:** word-by-word sync is a known open pain point even in mature apps (open issues in Quran.com's own iOS repo). Audio packs are large (400MB+ per reciter is typical), and iOS background downloads have been reported to silently truncate if the app isn't kept foregrounded.
- **Search:** diacritic-insensitive search fails to match without explicit tashkeel-stripping + Unicode normalization + hamza/alef unification — a documented cross-app failure pattern.
- **Platform policy:** Apple's guidelines explicitly ban "inflammatory religious commentary or inaccurate/misleading quotations of religious texts" — a real rejection vector. Precedent exists for region-specific takedowns (Quran/Bible apps pulled from Apple's China storefront under legal pressure) unrelated to app quality. Google Play requires all payments (including donations) go through Play Billing.
- **Offline-first:** large downloads risk storage exhaustion on constrained devices; no comparable app confirmed a resumable-download guarantee.
- **Flagged as unverified (no sourced incident found, not confirmed either way):** background-playback interruption handling (call/notification interrupting recitation), and bookmark/notes sync-conflict resolution if cloud sync is ever added.

## What's still unknown

- Which tech stack actually fits our constraints best — this doc gives trade-offs, not a decision (that's a future spec's job).
- Whether "no paid services by default" flexes for the one-time $99/year Apple Developer fee that every iOS distribution path requires — needs an explicit decision before a spec can be written.
- Whether audio/recitation, tajweed color-coding, word-by-word translation, and multi-riwayah (Hafs/Warsh) support are even in scope for a first version — each adds meaningfully to the failure-mode surface above.
- No formal license text was found for EveryAyah.com or mp3quran.net audio itself — needs direct confirmation before relying on either as a source, unlike the text/font sources which have explicit license terms.
- Real per-source data (rate limits, uptime) for the free Quran APIs is largely unpublished — no SLA found for any of them.

## Key sources

[Quran Foundation API](https://api-docs.quran.foundation/) · [Quran Foundation Developer Terms](https://api-docs.quran.foundation/legal/developer-terms/) · [Al Quran Cloud API](https://alquran.cloud/api) · [Tanzil Text License](https://tanzil.net/docs/text_license) · [Tanzil Project verification process](https://tanzil.net/docs/tanzil_project) · [Quranic Arabic Corpus](https://corpus.quran.com/download/) · [KFGQPC font license](https://scancode-licensedb.aboutcode.org/kfgqpc-uthmanic-script-hafs.html) · [Hafs vs Warsh differences](https://meccaacademy.com/hafs-vs-warsh-quran/) · [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · [Quran/Bible apps removed in China](https://www.ncregister.com/cna/bible-quran-apps-removed-from-apple-app-store-for-china-legal-pressure-cited) · [KMP/Flutter/RN 2026 comparison](https://www.javacodegeeks.com/2026/02/kotlin-multiplatform-vs-flutter-vs-react-native-the-2026-cross-platform-reality.html) · [Compose Multiplatform RTL issue](https://github.com/JetBrains/compose-multiplatform/issues/3997) · [.NET MAUI RTL issue](https://github.com/dotnet/maui/issues/16964)

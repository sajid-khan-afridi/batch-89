# Spec: Quran App for Android + iPhone

## Goal | Problem Statement

Muslims need reliable, always-available access to the Quran's Arabic text, correct recitation, and translation — without depending on network connectivity, accounts, or payment. This app must let any user on Android or iPhone open the Quran, read the Arabic text with tajweed coloring, hear its recitation, and read a translation of their choice, entirely offline after first launch, with no sign-in and no cost for the content built into the app.

## User Scenarios

- When a user opens the app for the first time, they can immediately read the Arabic text of any surah, without waiting for a download, creating an account, or having a network connection.
- When a user selects a surah (typing its Arabic name spelled in English, like "Al-Baqarah") or types a verse number, the app navigates directly there, without scrolling through the Quran from the beginning.
- When a user taps a verse's play control, the app plays that verse's recitation and visually highlights the verse currently being recited as playback continues into following verses.
- When a user taps play on a different verse while another verse's audio is already playing, the first stops immediately and the new one starts right away.
- When a user is offline and taps play on a verse whose audio was never downloaded, the app clearly states that audio isn't available offline, instead of spinning indefinitely or crashing.
- When a user scrolls away to read a different part of the Quran while audio is playing, the screen stays where they scrolled — the audio just keeps playing in the background.
- When a user switches the active translation, the translated text updates for the verse they're currently viewing, without losing their place.
- When a user hides the translation, they see Arabic text only, and can bring it back at any time.
- When a user switches on dark mode or changes the text size, the reading view updates right away and stays that way until they change it again.
- When a user searches a word — in Arabic or in a translation — the app lists every matching verse and jumps to whichever result the user picks, showing it in context. If nothing matches, the app says so clearly.
- When a user bookmarks a verse or simply closes the app while reading, reopening the app returns them to the last verse they were reading, automatically.
- When a user backgrounds the app, locks the screen, or receives a phone call during recitation playback, playback pauses appropriately and can resume from the same position, without crashing or losing the current verse.
- When a user tries to download a reciter's audio for offline use — either one chapter or the whole Quran at once — the app tells them the download size first and lets them cancel; if the download is interrupted, no broken or partial audio is ever offered as playable.
- When a blind or low-vision user turns on their phone's screen reader, it reads the Arabic text, translation, and verse number aloud.
- When a user who can't tell certain colors apart looks at tajweed coloring, they can still identify each rule from a non-color mark shown alongside the color.
- When the app updates to a new version, the user's bookmarks, last-read verse, and downloaded audio are exactly as they left them.

## Functional Requirements

**Reading & Navigation**
1. The app displays the complete Arabic Quran text — all 114 surahs, every verse — in full Uthmani script with complete diacritics (tashkeel), exactly as published by an authoritative, unmodified source. No character may be altered, paraphrased, or generated.
2. The user can jump directly to any surah by its Arabic name spelled in English (for example, "Al-Baqarah") or by number, and to any verse by number, without scrolling from the beginning. The app does not need to recognize a surah's translated English meaning (for example, "The Cow") as a valid way to jump to it.
3. While reading, the current surah name, verse number, and Juz' (Para) number are always visible on screen.
4. Moving forward or backward between verses never skips a verse or repeats one.
5. Bismillah counts as verse 1 only in Surah Al-Fatiha. In every other surah that begins with it, Bismillah is shown as an unnumbered heading above verse 1, not as its own numbered verse.
6. The verses of prostration (Ayat as-Sajdah) are visibly marked, so the reader knows a prostration is traditionally performed there.

**Reading Comfort**
7. The user can switch between a light theme and a dark theme at any time.
8. The user can choose from at least three text sizes (small, medium, large) for the Arabic text and the translation.

**Tajweed**
9. Every word of the Arabic text is color-coded according to standard tajweed pronunciation rules (covering, at minimum, madd, ghunnah, qalqalah, idgham, and ikhfa).
10. The user can turn tajweed coloring fully on or off; when off, the text is plain Arabic with no residual coloring.
11. Toggling tajweed coloring never changes, hides, or reflows the underlying Arabic letters or diacritics — only the color changes.
12. Each tajweed rule is shown with both a color and a non-color mark (such as a small symbol), so a user who can't tell certain colors apart can still identify which rule applies.

**Translations**
13. The app offers a curated set of 2 to 3 English translations, selectable from a visible list that names each translation and its translator/source.
14. Switching the active translation keeps the user on the same verse they were viewing — it never resets their navigation position.
15. Each translation's source/attribution is visible on-screen or reachable in one tap; no translation is ever shown as unattributed or authorless text.
16. The user can hide the translation to read Arabic text only, and bring it back at any time.

**Audio Recitation**
17. The app provides audio recitation for every verse in the Quran, from one clearly named default reciter.
18. The user can play, pause, and resume recitation from any verse; playback continues sequentially into the next verse unless the user pauses or stops it.
19. If the user taps play on a different verse while another verse's audio is already playing, the first verse's audio stops immediately and the new verse begins playing right away.
20. While audio plays, the app visually indicates which verse is currently being recited, updating in step with playback — never highlighting the wrong verse for more than a moment during a transition.
21. If the user manually scrolls to a different part of the Quran while audio is playing, the screen stays where the user scrolled — it does not jump back to follow the audio. The audio keeps playing regardless of what's on screen.
22. Audio is available offline only once the user has explicitly downloaded it. The user can download a single surah's audio, or download the audio for the entire Quran in one action. For every surah, the app shows whether its audio is downloaded, partially downloaded, or not downloaded.
23. If an audio download is interrupted (lost connection, app closed), the app never offers a corrupted or partial file as playable — the download either resumes or restarts cleanly before playback is offered.
24. Recitation keeps playing when the app is backgrounded or the screen is locked, and pauses automatically when interrupted by a phone call or another app's audio, resuming afterward if the user chooses.

**Search**
25. The user can search using typed Arabic text or typed translation text and gets a list of every verse that matches.
26. An Arabic search matches regardless of whether the user typed diacritics — a query without tashkeel still finds verses that contain it.
27. Selecting a search result jumps the user to that verse shown in context (with surrounding verses visible), not isolated on its own.
28. The search box matches typed words only; it does not need to understand direct chapter:verse references such as "2:255" (use the surah/verse jump in Reading & Navigation for that).

**Bookmarks & Resume**
29. The user can bookmark any individual verse, view a list of all bookmarks, and remove any bookmark.
30. The app automatically remembers the last verse the user was reading and reopens to it next time, with no action required.
31. Bookmarks and the last-read position persist across app restarts and device reboots without any account or network connection.
32. Bookmarks, the last-read position, and downloaded audio are never lost or reset when the app is updated to a new version.

**Accessibility**
33. The app works with the phone's built-in screen reader (such as VoiceOver or TalkBack), so a blind or low-vision user can have the Arabic text, translation, and verse number read aloud.

**Offline & Availability**
34. The complete Arabic text and all included translations are usable entirely offline starting from first launch — no download step is required for text or translations.
35. The app never requires an account, sign-in, or an internet connection to read text, read translations, search, bookmark, or resume reading.
36. The only feature that requires a one-time download is audio; before a download starts, the app states its size and lets the user cancel or later delete it to free space.

## Edge Cases & Rules

- A verse that spans a page or screen boundary is never visually split in a way that hides part of its Arabic text or diacritics.
- Surah At-Tawbah (chapter 9) has no Bismillah at all — its first verse is numbered 1 with no heading before it.
- If the device is offline and the user attempts to play recitation that was never downloaded, the app states that audio isn't available offline — it never shows an indefinite loading state or crashes.
- If the user deletes a downloaded reciter's audio while it is playing, playback stops cleanly rather than crashing or continuing from a deleted file.
- Switching the tajweed toggle, the active translation, the theme, or the text size while audio is playing never interrupts playback or changes the current verse position.
- The "last-read" position updates to the verse the user is stationed on when they close or background the app — rapidly scrolling past many verses does not repeatedly overwrite it with verses only passed through, not settled on.
- Arabic search treats visually-equivalent letter forms (e.g. different alef/hamza forms) a normal reader would consider "the same word" as matching — it never silently excludes a valid match over letter-form differences alone.
- If a search finds no matching verses, the app clearly tells the user no matches were found, instead of showing a blank screen.
- The same verse number refers to the same verse content in every view — Arabic text, every translation, and audio numbering must always agree with each other.
- A translation's displayed text and attribution are never edited, summarized, or reworded from what its source provides.

## Out-of-Scope

- Multiple qira'at/riwayat (e.g. Warsh, Qalun) — v1 covers Hafs 'an 'Asim only.
- Choosing between multiple reciters — v1 ships with one default reciter only.
- Translations in any language other than English.
- Word-by-word translation or grammatical/morphological analysis.
- Tafsir (verse commentary/exegesis).
- Matching a surah by its translated English meaning (for example, searching "The Cow" to find Al-Baqarah).
- Typing chapter:verse references (like "2:255") into the search box — use the direct surah/verse jump instead.
- Mushaf-style fixed print pagination (matching a physical Quran's exact page-by-page layout).
- User accounts, sign-in, or cross-device sync of bookmarks or last-read position.
- In-app purchases, subscriptions, ads, or donation flows.
- Social features: sharing, comments, community content, or user-generated notes.
- Prayer times, Qibla direction, or any feature unrelated to reading/hearing the Quran.
- Pushing corrected or updated Quran content without the user updating the app itself.

## Acceptance Criteria

- [ ] A fresh install, with no network connection ever granted, displays any verse's Arabic text and any of the 2–3 bundled translations.
- [ ] Every one of the 114 surahs and all their verses is reachable via direct navigation, by surah name/number and by verse number.
- [ ] Al-Fatiha's Bismillah is verse 1; in every other surah (except At-Tawbah, which has none), Bismillah appears but is not a separate numbered verse.
- [ ] All verses of prostration (Sajdah) are visibly marked.
- [ ] The user can switch between light and dark themes, and change text size, at any time.
- [ ] Toggling tajweed coloring on and off changes only color — the underlying characters are identical before and after.
- [ ] Each tajweed color is paired with a non-color mark, so a rule can be identified without relying on color alone.
- [ ] The user can hide the translation to see Arabic-only text, then bring it back.
- [ ] Every verse in the Quran has a working recitation from the default reciter, playable once that surah's audio is downloaded.
- [ ] Tapping play on a new verse while another is playing stops the first and starts the new one immediately.
- [ ] Playing audio across a full surah highlights each verse being recited, in order, with none skipped or highlighted out of turn.
- [ ] Scrolling away from the verse currently playing keeps the screen where the user scrolled; the audio keeps playing.
- [ ] The user can download a single chapter's audio, or the entire Quran's audio, in one action.
- [ ] Searching a word without diacritics returns verses that contain it with diacritics.
- [ ] Searching a word that matches nothing shows a clear "no results" message, not a blank screen.
- [ ] Bookmarking a verse, fully closing the app, and reopening it shows the bookmark still present and returns the user to their last-read verse.
- [ ] After updating the app to a new version, bookmarks, last-read position, and downloaded audio are unchanged.
- [ ] Interrupting an audio download mid-way never leaves an unplayable or corrupted file marked as "downloaded."
- [ ] Turning on a screen reader (VoiceOver/TalkBack) reads the Arabic text, translation, and verse number aloud.
- [ ] No screen in the app requires sign-in, account creation, or an internet connection, except starting an audio download.
- [ ] Switching translations, tajweed, theme, or text size while audio is playing does not stop playback or change the current verse.

## Open Questions

- Which specific 2–3 translations should be included, and are their sources confirmed free-to-use and properly attributable? (`research.md` flags translation copyright as varying by edition and jurisdiction — needs confirming before implementation, not before this spec.)
- Which single reciter is the default, and is that reciter's audio source's license confirmed? (`research.md` found no formal license text for EveryAyah/mp3quran audio itself.)
- The exact tajweed rule set and the specific color/non-color legend to show users is a content/UX decision for the plan stage, not this spec.
- Realistic offline storage footprint once all bundled content (text + 2–3 translations) plus per-surah audio downloads are accounted for — needed to give users accurate storage guidance.
- This "Full v1" scope (audio + tajweed + multi-translation + reading comfort + accessibility + Sajdah marking) has grown further during this clarification round. Worth revisiting whether it's buildable as one feature within course timelines, or should split into sequential specs (e.g., reading core, then audio, then tajweed) once a plan is attempted.
- iOS distribution requires a paid Apple Developer account ($99/year), which conflicts with the constitution's "no paid services by default" rule — unresolved, and will need a decision once this feature reaches a plan for building and shipping to iOS.

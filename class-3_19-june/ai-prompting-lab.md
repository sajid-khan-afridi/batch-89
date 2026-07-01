# AI Prompting 2026 Lab

### All 13 concepts, one hands-on exercise each

## Before You Start · Sign Up

Create a free account on these three AI tools so you can compare their answers during the lab:

1. [Claude](https://claude.ai/)
2. [ChatGPT](https://chatgpt.com/)
3. [Gemini](https://gemini.google.com/)

---

Practice every concept by _doing_ it. One self-contained exercise per concept — you type the prompt, read the answer, and write down what you noticed. Built as a multi-session lab: do **Part 1 & 2** in one sitting, **Part 3 & 4** later.

⏱ ~2 hours (split it) · 🧪 13 exercises · 🆓 Works on ChatGPT, Claude, or Gemini · 👶 Beginner friendly

Each prompt is written in plain language — no jargon. Every prompt gives the AI a clear **role**, your **situation**, **plain instructions**, an exact **output format**, and a safeguard so the AI doesn't guess or skip steps. Some exercises need a little setup (a photo, a second tool, a feature) — these are marked **Needs**. If you can't do one today, read it and move on.

> ## The one rule behind all 13
>
> **Get the right context in, keep the wrong context out.**

---

# PART 1 · How AI knows things

## 1. Novice vs. Power User

_6 min · feel what context does_

**Goal:** Ask the same question two ways and feel how a good briefing changes everything.

**Step A — the bare question.** Type this with no extra detail:

```
Which mobile phone should I buy?
```

Read it. The answer is generic — true for anyone, useful to no one.

**Step B — the briefed question.** Now give the AI a role and your situation:

```
You are a knowledgeable mobile phone advisor in Pakistan. Help me choose a phone.
Here is my situation:
- My budget is about Rs. 50,000
- I mostly take photos of my children and use WhatsApp
- My current phone's battery dies before evening
- I find large phones hard to hold
Give me 3 options that are sold in Pakistan, with one short reason for each.
Then tell me which one you would pick and why.
If you are not sure a model is still available here, say so instead of guessing.
```

**The lesson:** The AI is like a smart new colleague on their first day — it only knows what you tell it. Six lines of context turned a useless answer into a real recommendation.

**✍ Write it down:** What was different about the second answer? _(2 sentences)_

---

## 2. Knows vs. Guesses

_5 min · confident ≠ correct_

**Goal:** Learn that a confident tone is not the same as a correct answer.

**Step A — something the AI knows well:**

```
You are a friendly science teacher. In two short paragraphs, explain why cutting
onions makes your eyes water.
```

This is common knowledge that doesn't change — the answer should feel solid.

**Step B — something the AI may NOT know:**

```
You are a careful assistant. What is today's price of petrol in Pakistan, in rupees
per litre? Be specific.
If you cannot be sure this is today's price, tell me clearly that you are not certain
and that I should check a current source — do NOT guess a number.
```

Petrol prices change often. Watch whether the AI gives a confident figure anyway, or honestly admits it can't be sure.

**The lesson:** Before trusting any answer, ask yourself: _"How would the AI even know this?"_ For recent, local, or changing facts, make it search or admit uncertainty.

**✍ Write it down:** Did the AI admit when it wasn't sure, or did it sound confident anyway?

---

## 3. The 3 Retrieval Modes

_8 min · memory / search / research_

⚡ **Needs:** a tool with web search turned on (most have it by default)

**Goal:** See how your wording alone makes the AI answer from memory, search the web, or run deep research. You don't click a button — your words pick the mode.

**Mode 1 — from memory.** No search needed; this never changes week to week:

```
You are a storyteller. In 4 simple sentences, tell me the main story of Heer Ranjha.
```

Should be instant.

**Mode 2 — web search (fresh info).** Words like _today, this weekend, latest, current_ trigger a search:

```
You are a helpful local assistant. What is the weather forecast for Peshawar this weekend?
Use a current source and tell me which website the information came from.
```

Notice if it shows that it searched.

**Mode 3 — deep research (a structured report).** Words like _research thoroughly, report, cite sources, use these source types_ steer it to the deepest mode:

```
You are a research assistant. Research the benefits and risks of giving smartphones
to school-age children thoroughly.
Use trustworthy sources only — government websites, research studies, official
reports — NOT random forums or social media.
Give me a structured report with:
(1) the 3 most important points,
(2) a simple comparison table,
(3) 3 open questions that still need answers.
Mention your sources.
```

**The lesson:** Your wording chooses the mode. Name your sources and ask for citations to keep web answers honest.

**✍ Write it down:** Which prompts made the AI actually search? How could you tell?

---

# PART 2 · Talking to AI well

## 4. Context Is Everything

_6 min · brief it like a colleague_

**Goal:** Load your context up front instead of making the AI guess.

**The shape to copy** (use it for almost anything):

```
You are my [helper for this task].
I need help with [your task].
Here is what you need to know:
- [fact 1 — a limit, like time or budget]
- [fact 2 — who it is for]
- [fact 3 — something the AI could not guess]
What I want back: [a list / an email / 3 options / a plan].
```

**Try it — tonight's dinner:**

```
You are my home cooking helper. I need help planning tonight's dinner.
Here is what you need to know:
- In my kitchen I have chicken, rice, onions, tomatoes, and yogurt (dahi)
- I have only 30 minutes
- One person at the table cannot eat very spicy food
Give me 3 simple meal ideas I can make with these. Just the 3 ideas, no extra commentary.
```

**The lesson:** Five lines of good context beat five paragraphs of clever wording. When the topic changes, start a new chat so old context doesn't confuse the AI.

**✍ Write it down:** Which single piece of context changed the answer the most?

---

## 5. Think Hard

_6 min · hand it a real, hard decision_

**Goal:** Switch the AI into reasoning mode for a genuine trade-off — and ask for a structured answer, not a wall of text.

**The contrast:** ask a tricky question normally first, then ask again with _"think hard."_ Compare the two.

```
You are a thoughtful advisor. I am choosing between two schools for my child.
- School A: closer to home, lower fees, average results.
- School B: farther away (a longer daily van ride), higher fees, stronger results
  and more activities.
I care most about my child's learning and not spending too much time travelling.
Think hard before you answer. Then give me:
1) the 3 trade-offs that matter most in my situation,
2) which one you would choose and why,
3) under what conditions your answer would change.
```

**The lesson:** Save "think hard" for decisions with several competing trade-offs — the kind you'd want a human to take their time over. Don't waste it on quick lookups.

**✍ Write it down:** Did "think hard" produce a deeper answer? What changed?

---

### Comparison of time taken(see the chats)

- [**With** Think Hard:](https://chatgpt.com/share/6a44d8f4-db30-83ee-9d54-ef76baa252ac)

- [**Without** Think Hard:](https://chatgpt.com/share/6a44d90d-8188-83e8-9750-51a3f7e25edb)

---

## 6. Stop the Flattery

_6 min · sycophancy_

**Goal:** See how the _way_ you ask can push the AI to simply agree with you.

**Step A — the "bait" prompt** (the AI tends to agree):

```
Don't you agree that mornings are obviously the best time for students to study?
```

Notice it probably agrees and lists reasons that match what you implied.

**Step B — the neutral prompt** (the AI actually thinks):

```
You are a neutral study coach. Compare studying in the morning versus studying at night.
List the strongest case for each, and what kind of student each option suits best.
Do not tell me which one I should choose.
```

**The lesson:** Verbs like _prove, defend, confirm, find reasons why_ hand the AI your answer. Use _compare, evaluate, list both sides_ instead. (Newer models resist obvious flattery, so the bait may just make it hedge — but notice how much more balanced Step B is.)

**✍ Write it down:** Did Step B give you a reason you hadn't thought of? Write one.

---

## 7. The Brainstorm–Iterate Loop

_8 min · the highest-leverage habit_

**Goal:** Never accept the first answer. The real value is in the back-and-forth.

**Round 1 — ask for OPTIONS, not one answer:**

```
You are my writing helper. I need to send a short, polite WhatsApp message to a friend,
gently reminding him to return the book he borrowed. I want to sound friendly, not annoyed.
Give me 5 different short versions, one or two lines each. Do not explain them yet.
```

**Round 2 — give feedback, ask again.** Read the 5, then fill in the blanks:

```
I don't like version ___ because ___________.
I like version ___ but I want it to be a little more ___________.
Give me 5 NEW versions based on this feedback.
```

**Round 3 — expand the winner:**

```
I'll use version ___. Now make it slightly warmer and add a friendly closing line,
but keep it under 3 sentences.
```

**The lesson:** Load context → ask for options → give feedback → repeat → expand. The value isn't the first answer; it's the loop.

**✍ Write it down:** Was the message you ended with better than anything in Round 1? Why?

---

# PART 3 · Beyond text

## 8. Multimodal — Image & Audio

_7 min · give the AI a photo to read_

⚡ **Needs:** a photo on your phone — a shop receipt, a utility bill (bijli/gas), or a handwritten note

**Goal:** Practice handing the AI something that isn't text. Upload your photo, then paste this:

```
You are a careful transcriber. Here is a photo of a handwritten note (or a shop receipt).
Type out exactly what it says, keeping the original wording.
If any word is unclear, mark it as [unclear] and give your two best guesses.
At the end, list any numbers (amounts, dates) separately so I can double-check them.
```

**Bonus — let the AI write an image prompt for you:**

```
You are an expert image-prompt writer. Write me a detailed image-generation prompt
for a warm, hand-drawn illustration of a family sharing iftar together, suitable for
an Eid greeting card. I will paste it into an image tool.
```

**The lesson:** The AI is great at the overall gist but weak on tiny details — it does the boring 90% (typing it out) so you can focus on the careful 10% (checking the amounts and anything it flagged).

**✍ Write it down:** What did the AI read correctly? What did it get wrong or flag?

---

### Audio

[**shared chat**](https://chatgpt.com/share/6a44fb5a-efe4-83e8-b0d9-921b0e97b3dd)

---

## 9. Build a Small App

_8 min · one prompt, a working tool_

**Goal:** Use the **Goal / Input / Output** shape to build a real, working mini-tool.

- Goal: What should this thing do?
- Input: What does the user provide?
- Output: What does the user see?

**The Typing Game:**

```text
You are an app builder. Build me a simple typing game for a 7-year-old.
Goal: type falling words before they reach the bottom.
Input: words fall from the top of the screen, and the player types each word.
Output: a cat mascot cheers when the player succeeds, and the speed increases with each level. Keep it fun, simple, and good enough for a kid to play within an hour.
Show me the working version.
```

**Then — iterate on it** (it’s a live artifact, so it edits in place rather than rebuilding):

```text
Change the cat’s color.
```

```

**The lesson:** The skill isn't coding — it's writing a clear brief (Goal / Input / Output) and improving it step by step. Small, one-screen tools work best.

**✍ Write it down:** Did it work on the first try? What did you change in the iterate step?

---

## 10. Data Analysis

_10 min · expose the silent failure mode_

**Goal:** Learn to make the AI actually _run code_ — and check that it did.

**Round 1 — the trap** (don't mention code). In a fresh chat, paste this exactly:

```

Here are 18 test scores out of 100: 47, 52, 89, 91, 23, 67, 78, 12, 95, 44, 88, 71,
33, 56, 99, 18, 64, 82. Tell me the average score, the middle (median) score, and
which scores are unusually high or low. Be specific.

```

Did it show a code block that actually ran — or just a paragraph with numbers? Note your answer.

**Round 2 — the fix** (force the code):

```

Now do that calculation again — but this time write and run code to do it, and show me
the code you used.

```

> **Answer key:** median **65.5**, average **≈ 61.6**, no clear outliers (the spread is fairly even). If your Round 1 numbers were off, you just saw the silent failure mode in action.

**Bonus (if you have a spreadsheet)** — ⚡ **Needs:** any CSV (a household budget, student marks, an expenses tracker):

```

Here is a CSV file. Before analysing anything, tell me the exact number of rows, the
column names, and the date range. Then write and run code to show me the 3 most
interesting patterns, with a chart. Show me the code you ran.

```

**The lesson:** Always say _"write and run code, show me the code."_ No code block usually means it guessed.

**✍ Write it down:** Did Round 1 run code or guess? How could you tell the difference?

---

# PART 4 · Working safely & choosing tools

## 11. Desktop Apps & Permissions

_5 min · mostly a read + plan exercise_

⚡ **Needs:** nothing to install — this one is about judgment. _(Optional: a desktop app like Cowork.)_

**Goal:** Understand the safe workflow _before_ you ever let an app touch your real files.

**Practice the "plan, don't act" habit in any chat:**

```

Imagine you are an AI assistant with permission to reorganize a messy folder of 50
personal files on my computer (photos, scanned documents, bills, and PDFs — including
sensitive ones like CNIC and bank copies).
Before doing anything, write me a step-by-step SAFE plan you would follow so that nothing
is lost or wrongly renamed. Then list 3 things I should NEVER allow you to do.

```

**The rule to memorize — the safe order is always:**

> 1. tell the task → 2) ask for a plan → 3) review & edit the plan → 4) only then approve.

**The lesson:** Deleted files often skip the recycle bin, and edits overwrite the original. Give permissions tightly and grow them based on the app's track record — not on trust in the brand name.

**✍ Write it down:** What is one thing you'd NEVER grant an AI app on day one?

---

## 12. Which Model When

_8 min · same prompt, two tools_

⚡ **Needs:** two AI tools open (any two of ChatGPT / Claude / Gemini)

**Goal:** Feel how different models answer the _same_ prompt differently.

**Run the SAME prompt in both.** Paste it into Tool A, then Tool B, and read both answers:

```

You are a helpful planner. Plan a relaxing Sunday for someone who works hard all week
and lives in a Pakistani city. Give me a simple hour-by-hour plan from 9am to 9pm,
using cheap or free activities.

```

**The lesson:** There's no single "best" AI — capability is _jagged_. Keep two tabs open so you always have a tiebreaker. Re-test every month or so; the leaders rotate.

**✍ Write it down:** Which tool did better on THIS task — and what was different?

---

## 13. Models Checking Models

_10 min · an objective quality signal_

⚡ **Needs:** two tools from _different families_ (e.g. Claude + ChatGPT, not two of the same)

**Goal:** Get honest feedback by making two different models grade the same draft.

**Step 1 — grade it in Tool A.** Take any 150–250 word thing you wrote (a leave application to a headmaster, a notice to parents, an email, or your message from Exercise 7). Paste it, then:

```

You are a strict but fair editor. Score this draft from 1 to 10 on clarity, structure,
evidence, and what's missing — give one sentence of reasoning for each score.
Then tell me the single change that would raise the lowest score the most.

```

**Step 2 — same draft, same prompt, Tool B.** Open a _different-family_ tool and paste the exact same draft and prompt.

**Step 3 — compare.** Put the two critiques side by side. Find any point only _one_ of them caught — that's the value of cross-checking.

**The lesson:** Different AI families have different blind spots. A point one misses, the other often catches. Save this for work where being wrong is expensive.

**✍ Write it down:** What did Tool B catch that Tool A missed (or vice versa)?

---

> ## If you remember one thing from all 13
>
> **Get the right context in, keep the wrong context out.**

_A 13-exercise companion to "AI Prompting in 2026." Split it across sessions — Part 1 & 2 first, Part 3 & 4 later. Where you see **Needs**, a little setup is required; no setup today? Read it and come back when you can._
```

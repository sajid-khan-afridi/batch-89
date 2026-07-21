---
name: claude-ds-setup
description: This skill should be used when the user asks to "set up claude-ds", "add a DeepSeek launcher", "run Claude Code with DeepSeek", "configure DeepSeek API", or "update my DeepSeek API key" — anything about creating or repairing a separate `claude-ds` command that runs Claude Code against the DeepSeek API while leaving the existing `claude` subscription login untouched.
---

# Set up a `claude-ds` launcher for DeepSeek

Create a second command, `claude-ds`, that runs the same Claude Code binary against DeepSeek's
Anthropic-compatible API. Plain `claude` keeps its existing subscription login, unchanged.

Works on Windows, macOS, Linux, and WSL. Detect the environment — never assume paths from a previous
run or another machine.

## The one rule that matters

`ANTHROPIC_AUTH_TOKEN` and `ANTHROPIC_BASE_URL` override subscription auth **wherever they are
visible**. Never set them as user/system environment variables, in a shell profile (`.bashrc`,
`$PROFILE`), or in `settings.json` — plain `claude` would silently start billing DeepSeek instead of
using the subscription.

Process-scoped isolation is the entire mechanism: `setlocal` in a `.cmd` on Windows, a child process
on POSIX. Nothing outside the wrapper may be modified.

## Procedure

### 1. Obtain the API key

Use the key if one was passed as a skill argument. Otherwise ask the user to paste their DeepSeek API
key from <https://platform.deepseek.com/api_keys>, and stop until they provide it. Never invent,
guess, or reuse a key from anywhere else.

Mention when asking that a pasted key will appear in the session transcript.

### 2. Locate the Claude Code launcher

Resolve it from `PATH` — the one invariant across all install methods (native script, Homebrew,
WinGet, apt/dnf/apk, npm global):

- Windows: `(Get-Command claude -ErrorAction SilentlyContinue).Source`
- macOS/Linux/WSL: `command -v claude`

If it does not resolve, stop and point the user at <https://code.claude.com/docs/en/setup> to install
Claude Code first. Do not guess a path.

**Use the PATH-visible path verbatim — do not resolve symlinks.** On macOS/Linux native installs
`~/.local/bin/claude` is a symlink into `~/.local/share/claude/versions/`, repointed on every
auto-update. A `readlink -f` path pins the wrapper to one version that later gets cleaned up.

### 3. Choose the wrapper directory

Try in order, and report which one was used:

1. `~/.local/bin` (`%USERPROFILE%\.local\bin`) if it exists and is on `PATH` — the common case
2. Otherwise the directory containing `claude`, if writable
3. Otherwise create `~/.local/bin`, write there, and give the user the exact line to add it to `PATH`,
   noting that a new terminal is required

Homebrew (`/opt/homebrew/bin`), WinGet (Program Files), and some npm prefixes are not user-writable —
which is why `~/.local/bin` is preferred rather than assumed.

### 4. Check for an existing wrapper

If one is already present, read it and replace **only** the `ANTHROPIC_AUTH_TOKEN` line, preserving
any other customization. Report this as an update, not a fresh install.

### 5. Write the wrapper

Substitute the key for `<API_KEY>` and the resolved launcher path for `<CLAUDE_PATH>`.

**Windows** — `claude-ds.cmd`:

```bat
@echo off
setlocal
set "ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic"
set "ANTHROPIC_AUTH_TOKEN=<API_KEY>"
set "ANTHROPIC_MODEL=deepseek-v4-pro"
set "ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-v4-pro"
set "ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-v4-pro"
set "ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash"
set "CLAUDE_CODE_SUBAGENT_MODEL=deepseek-v4-flash"
set "CLAUDE_CODE_EFFORT_LEVEL=max"
"<CLAUDE_PATH>" %*
```

**macOS / Linux / WSL** — `claude-ds` (no extension), then `chmod 755`:

```bash
#!/usr/bin/env bash
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="<API_KEY>"
export ANTHROPIC_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_EFFORT_LEVEL="max"
exec "<CLAUDE_PATH>" "$@"
```

Env var names and values come from
<https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code/>.

Why the wrapper is shaped this way:

- `claude` is invoked by **absolute path** so the wrapper can never recurse into itself
- `%*` / `"$@"` forwards every argument, so `claude-ds --resume`, `claude-ds -p "…"` work normally
- POSIX uses `exec` to preserve exit codes and signal handling
- The wrapper shares `~/.claude`, so skills, MCP servers, and `CLAUDE.md` carry over to `claude-ds`

### 6. Verify

Run all three checks and report each result:

| Check | Command | Expected |
|---|---|---|
| DeepSeek works | `claude-ds -p "Reply with exactly: DS-OK" --max-turns 1` | prints `DS-OK` |
| No env leakage | `$env:ANTHROPIC_BASE_URL` / `echo "$ANTHROPIC_BASE_URL"` in the same shell | empty |
| Subscription intact | `claude -p "Reply with exactly: PRO-OK" --max-turns 1` | prints `PRO-OK` |

The leak check is the important one — it proves the DeepSeek config stayed inside the wrapper process
and cannot reach plain `claude`.

### 7. Report

State the wrapper path, whether it was created or updated, and the three check results. Mask the key
as first-4…last-4 (`sk-be67…6e77`). Never echo it in full.

## Troubleshooting

- **`claude-ds: command not found`** — the wrapper directory is not on `PATH`, or the terminal predates
  the change. Open a new terminal; if it still fails, add the directory to `PATH`.
- **`401` / authentication error** — key is wrong, revoked, or has a stray space. Regenerate at
  <https://platform.deepseek.com/api_keys> and re-run this skill.
- **`Insufficient Balance`** — DeepSeek is prepaid; the account needs topping up.
- **Model not found / `404`** — DeepSeek renamed its models. Check
  <https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code/> for the current names and
  update the `ANTHROPIC_MODEL` / `*_OPUS_MODEL` / `*_SONNET_MODEL` / `*_HAIKU_MODEL` lines.
- **"claude.ai connectors are disabled because another auth source is set"** — expected, not a failure.
  It confirms the DeepSeek key is in use for that session only. It does not appear under plain `claude`.

## Removing the launcher

Delete the wrapper file. Nothing else was modified, so plain `claude` is unaffected.

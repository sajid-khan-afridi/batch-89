"""UserPromptSubmit hook: append every prompt to docs/session_prompts/.

Reads the hook payload as JSON on stdin and writes the prompt to this session's
log file. The first prompt of a session creates the file; later prompts append.

File name: N-slug-YYYY-MM-DD.md
  N     next unused number in docs/session_prompts/
  slug  first five words of the session's opening prompt, kebab-cased
  date  the day the session started

Each file carries an HTML comment holding its session id; that is how a later
prompt finds the file it belongs to. Nothing is stored outside the log folder.

Never blocks a prompt: any failure exits 0 silently. Prints nothing, because
stdout from a UserPromptSubmit hook is injected into Claude's context.
"""

import datetime
import json
import re
import sys
from pathlib import Path

MAX_SLUG_WORDS = 5
MAX_SLUG_CHARS = 40

ROOT = Path(__file__).resolve().parents[2]
LOG_DIR = ROOT / "docs" / "session_prompts"
SESSION_MARK = "<!-- session: {} -->"


def slugify(prompt):
    words = re.findall(r"[A-Za-z0-9]+", prompt.lower())[:MAX_SLUG_WORDS]
    return "-".join(words)[:MAX_SLUG_CHARS].strip("-") or "session"


def next_number():
    used = [
        int(m.group(1))
        for path in LOG_DIR.glob("*.md")
        for m in [re.match(r"(\d+)-", path.name)]
        if m
    ]
    return max(used, default=0) + 1


def find_session_file(mark):
    for path in sorted(LOG_DIR.glob("*.md")):
        if mark in path.read_text(encoding="utf-8"):
            return path
    return None


def main():
    payload = json.loads(sys.stdin.buffer.read().decode("utf-8"))
    prompt = (payload.get("prompt") or "").strip()
    session_id = payload.get("session_id") or "unknown"
    if not prompt:
        return

    LOG_DIR.mkdir(parents=True, exist_ok=True)
    mark = SESSION_MARK.format(session_id)
    path = find_session_file(mark)
    now = datetime.datetime.now()

    if path is None:
        # A bare slash command would name the file "clear" or "compact". Wait for
        # a real prompt to open the session; slash commands are logged after that.
        if re.fullmatch(r"/\S+", prompt):
            return
        number = next_number()
        slug = slugify(prompt)
        date = now.strftime("%Y-%m-%d")
        path = LOG_DIR / f"{number}-{slug}-{date}.md"
        path.write_text(
            f"# Session {number} — {slug} ({date})\n\n{mark}\n",
            encoding="utf-8",
        )

    with path.open("a", encoding="utf-8") as f:
        f.write(f"\n## {now.strftime('%H:%M')}\n\n{prompt}\n")


if __name__ == "__main__":
    try:
        main()
    except Exception:
        pass

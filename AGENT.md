# AGENT.md

## What this is
Entry for the make.fun bounty `u-golden-heron-44-fortune-in-a-pot-ded981e9` ("Fortune in a Pot"), titled "More Pets Than the Cat". The entry is one fortune line for a houseplant, 111 characters.

## The gate
`/output/entry.txt` must be UTF-8 text of 1 to 120 characters and not only whitespace. `main.ts` checks this before writing and exits non-zero with a message if the check fails.

## How to verify
1. Run `node main.ts` (Node 22).
2. Read `/output/entry.txt`. It must equal the quoted line in README.md exactly, with no trailing newline, and be 111 characters.

## Files
- `main.ts`: entrypoint (constants, `validate`, `writeEntry`, `main`)
- `LICENSE`: MIT
- `README.md`: title, description, entry quote, badges
- `.makefun/owner.json`: owner wallet

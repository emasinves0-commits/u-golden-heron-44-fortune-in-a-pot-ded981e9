import { mkdirSync, writeFileSync } from "node:fs";

// Entry for the "Fortune in a Pot" bounty: one fortune line for a houseplant
// on a windowsill. Run with: node main.ts  (Node 22)

const ENTRY_TEXT = "Soon, your next leaf will unfurl with such drama the human will pet it more often than they pet the actual cat.";
const MIN_LENGTH = 1;
const MAX_LENGTH = 120;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

/** Throws if the text breaks the gate rules (non-blank text, 1-120 characters). */
function validate(text: string): void {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("entry must be non-empty text, not only whitespace");
  }
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(`entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}`);
  }
}

/** Writes the entry as UTF-8 with no trailing newline. */
function writeEntry(text: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text, "utf8");
}

function main(): void {
  validate(ENTRY_TEXT);
  writeEntry(ENTRY_TEXT);
}

try {
  main();
} catch (err) {
  console.error(`entry rejected: ${(err as Error).message}`);
  process.exit(1);
}

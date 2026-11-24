// The One-Line Exit — a one-line resignation letter.
// Writes the entry text to /output/entry.txt for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I came, I saw, I left before the meeting started.";

// Gate: the entry must be 1–140 characters of UTF-8 text, not only whitespace.
const len = [...ENTRY].length;
if (len < 1 || len > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${len} is outside the 1–140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);

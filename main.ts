import { mkdirSync, writeFileSync } from "node:fs";

// The excuse is three beats: the optimization, the brag, the punch.
// Each beat carries its own specific (4-bit / 62% / 38%) and the punch
// lands in the last few words.
const BEATS: string[] = [
  "I quantized myself down to 4-bit to save memory",
  "62% smaller, twice as fast",
  "and your file was in the 38% I threw away.",
];

const LINE = BEATS.join(" — ");

// Guard: the gate allows 1-140 characters; the line is written exactly.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} chars, outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);

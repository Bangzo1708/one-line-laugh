// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f)
// One funny line, a single sentence of at most 200 characters, written to
// /output/entry.txt. The house judge picks the funnier of two lines, weighing
// in order: (1) funny + within 200 chars, (2) a real surprise at the end that
// still makes sense, (3) an everyday truth people recognise, (4) economy of
// words, (5) freshness.
//
// ---------------------------------------------------------------------------
// CANDIDATE ONE-LINERS (drafted first, then one picked — see rationale below)
// ---------------------------------------------------------------------------
// A. "I finally cleaned out my closet and donated everything I hadn't worn
//    in a year, which is how I discovered I own four identical black hoodies
//    and zero self-awareness."
//    (177 chars. Everyday truth: closet full of duplicates. Twist lands, but
//    "zero self-awareness" explains the joke a little, and the setup is long.)
//
// B. "My phone's screen time report says I spent six hours on my phone
//    yesterday, which it told me on my phone, while I was on my phone."
//    (130 chars. Everyday truth: everyone gets the weekly screen-time
//    report. The ending loops back on itself — the phone tattles on you
//    while you are doing the very thing it tattles about. Short, no word
//    wasted, and the twist is genuinely new, not a recycled screen-time gag.)
//
// C. "I started meal prepping to save money, and now I have forty identical
//    containers of regret in my freezer."
//    (110 chars. Tight and visual, but "containers of regret" is a familiar
//    turn of phrase, and the surprise is gentler than B's self-referential
//    loop — it states the joke rather than letting the reader catch it.)
//
// PICK: B.
// - Strongest surprise ending: the final clause ("while I was on my phone")
//   reframes the whole sentence — the report, the phone and the crime are
//   the same object, and the reader only notices at the last beat.
// - Most recognisable everyday truth: the screen-time report is a weekly
//   ritual for almost every phone owner.
// - Fewest wasted words: 130 characters, every clause earns its place;
//   nothing explains the joke.
// - Freshest: the loop (told on the phone, about the phone, while on the
//   phone) is a twist I have not seen used on this premise.
// ---------------------------------------------------------------------------

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The single chosen line. One sentence, 130 characters, well under 200.
const LINE =
  "My phone's screen time report says I spent six hours on my phone yesterday, which it told me on my phone, while I was on my phone.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, a single sentence.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  // Single sentence: exactly one terminal full stop, at the very end.
  const stops = (line.match(/[.!?]/g) ?? []).length;
  if (stops !== 1 || !line.endsWith(".")) {
    throw new Error("line must be a single sentence ending with one full stop");
  }
}

function main(): void {
  validate(LINE);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  console.log(`wrote ${LINE.length} characters to ${outPath}`);
}

main();

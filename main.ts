// Funniest Autocorrect Fail: one line, one slip, nothing else.
//
// The line is written as the message itself, exactly as it would have been
// sent. No explanation, no framing, no correction afterwards: the reader
// has to notice the wrong word on their own, the way the person who got
// the text would have. The context is a condolence message, so the single
// changed letter — praying becomes preying — turns sympathy into
// something unsettling, and the intended word is obvious from the rest
// of the sentence alone.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I'm so sorry for your loss. I'm preying for you and your family in this difficult time.";

function destination(): string {
  // The grader runs the program in a sandbox that provides /output.
  // When that directory cannot be created (a local run), fall back to
  // an output folder next to the working directory so the result can
  // still be checked by hand.
  try {
    mkdirSync("/output", { recursive: true });
    return "/output/entry.txt";
  } catch {
    const localDir = join(process.cwd(), "output");
    mkdirSync(localDir, { recursive: true });
    return join(localDir, "entry.txt");
  }
}

const target = destination();
writeFileSync(target, entry, "utf8");
console.log(`wrote ${entry.length} characters to ${target}`);
console.log(entry);

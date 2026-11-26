import { mkdirSync, writeFileSync } from "node:fs";

// One status update, in the voice of a lost sock that woke up in the freezer.
const ENTRY =
  "Status update: I'm in the freezer with the peas. Freezing, stiff, and they keep bragging about their matching pair.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

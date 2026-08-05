import fs from "fs";
import path from "path";

const file = path.join(process.cwd(), "src", "lib", "blog", "posts-batch4.ts");
let content = fs.readFileSync(file, "utf8");

const dates = [
  "2026-06-01", "2026-06-04", "2026-06-08", "2026-06-11",
  "2026-06-15", "2026-06-18", "2026-06-22", "2026-06-25",
  "2026-06-29", "2026-07-02", "2026-07-06", "2026-07-09",
  "2026-07-13", "2026-07-16", "2026-07-20", "2026-07-23",
  "2026-07-27", "2026-07-30", "2026-08-02", "2026-08-04"
];

let idx = 0;
content = content.replace(/"publishedAt": "2026-07-27"/g, () => {
  const d = dates[idx % dates.length];
  idx++;
  return `"publishedAt": "${d}"`;
});

fs.writeFileSync(file, content, "utf8");
console.log(`Successfully updated ${idx} post dates in posts-batch4.ts`);

import "../src/index.ts";
import fs from "node:fs";

fs.writeFileSync(
  "docs/index2.html",
  document.documentElement.outerHTML,
  "utf-8",
);

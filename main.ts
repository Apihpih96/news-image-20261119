import { copyFile, mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

async function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const src = resolve("entry.png");
  const dest = resolve(outputDir, "entry.png");

  await mkdir(outputDir, { recursive: true });
  await copyFile(src, dest);

  const info = await stat(dest);
  console.log(`Copied entry.png to ${dest} — ${info.size} bytes`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

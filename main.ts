import { copyFile, mkdir, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const src = resolve(__dirname, "entry.png");
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

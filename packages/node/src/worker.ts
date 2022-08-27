import fs from "node:fs/promises";
import { performance } from "node:perf_hooks";
import { runYamlFmt } from "@js-yamlfmt/wasm";

export default async function (filePath: string): Promise<void> {
  const now = performance.now();
  const source = await fs.readFile(filePath, "utf-8");
  const result = await runYamlFmt(source);
  await fs.writeFile(filePath, result);
  console.log(`${filePath}: ${performance.now() - now} ms`);
}

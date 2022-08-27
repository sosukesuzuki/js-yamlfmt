import path from "node:path";
import meow from "meow";
import { globby } from "globby";
import Tinypool from "tinypool";

const cli = meow(
  `Usage
		$ node-yamlfmt .`,
  { importMeta: import.meta }
);

async function processCli(input?: string) {
  if (!input) {
    throw new Error("input is required.");
  }
  const exts = new Set([".yml", ".yaml"]);
  const files = (
    await globby(input, { absolute: true, gitignore: true })
  ).filter((file) => exts.has(path.extname(file)));
  const pool = new Tinypool({
    filename: new URL("./worker.mjs", import.meta.url).href,
  });
  await Promise.all(
    files.map((file) => {
      return pool.run(file);
    })
  );
}

processCli(cli.input[0]);

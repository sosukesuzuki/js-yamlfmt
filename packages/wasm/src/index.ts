// @ts-ignore
import { getBuf } from "./wasm.js";

function throwError(message: string) {
  throw new Error(message);
}

async function initialize(): Promise<(source: string) => string> {
  globalThis.throwError = throwError;
  await import("./wasm_exec.js");
  const go = new globalThis.Go();
  // @ts-expect-error
  const { instance } = await WebAssembly.instantiate(getBuf(), go.importObject);
  go.run(instance);
  return globalThis.runYamlFmt;
}

let runYamlFmtFunc: (source: string) => string;
export async function runYamlFmt(source: string): Promise<string> {
  if (!runYamlFmtFunc) {
    runYamlFmtFunc = await initialize();
  }
  return runYamlFmtFunc(source);
}

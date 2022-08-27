import { getBuf } from "./wasm.js";

function throwError(message: string) {
  throw new Error(message);
}

async function initialize(): Promise<(source: string) => string> {
  // @ts-expect-error
  globalThis.throwError = throwError;
  // @ts-expect-error
  const { instance } = await WebAssembly.instantiate(getBuf(), go.importObject);
  // @ts-expect-error
  go.run(instance);
  // @ts-expect-error
  return globalThis.runYamlFmt;
}

let runYamlFmtFunc: (source: string) => string;
export async function runYamlFmt(source: string): Promise<string> {
  if (!runYamlFmtFunc) {
    runYamlFmtFunc = await initialize();
  }
  return runYamlFmtFunc(source);
}

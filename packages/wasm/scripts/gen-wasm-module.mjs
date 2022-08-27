import fs from "node:fs/promises";

const mainWasm = await fs.readFile(new URL("../main.wasm", import.meta.url));
const mainWasmBase64 = Buffer.from(mainWasm, "binary").toString("base64");

const module = `
const source = '${mainWasmBase64}';
const isNode =
	typeof process !== 'undefined' &&
	process.versions != null &&
	process.versions.node != null;
export function getBuf(): any {
	if (isNode) {
		return Buffer.from(source, "base64");
	} else {
		const raw = globalThis.atob(source);
		const rawLength = raw.length;
		const buf = new Uint8Array(new ArrayBuffer(rawLength))
		for(var i = 0; i < rawLength; i++) {
			buf[i] = raw.charCodeAt(i)
	  }
		return buf;
	}
}
`;

await fs.writeFile(new URL("../src/wasm.ts", import.meta.url), module, "utf-8");

import { runYamlFmt } from "@js-yamlfmt/wasm";

const foo = `
type: "library"
language: "typescript"
project:
  name: "wasm"
  description: "WebAssembly binding of yamlfmt"
  owner: "sosukesuzuki"
  maintainers: ["sosukesuzuki"]
  channel: "#na"

workspace:
  inheritedTasks:
    rename:
      buildPackage: "build"

tasks:
  build:
    deps:
      - "wasm:cp-wasm-exec"
      - "wasm:wasm-module"

  typecheck:
    args:
      - "--force"
    deps:
      - "wasm:cp-wasm-exec"
      - "wasm:wasm-module"

  wasm-module:
    type: "system"
    command:
      - "node"
    args:
      - "./scripts/gen-wasm-module.mjs"
    deps:
      - "wasm:build-wasm"

  cp-wasm-exec:
    type: "system"
    command:
      - "bash"
    args:
      - "./scripts/cp-wasm-exec.sh"
    outputs:
      - "wasm_exec.js"

  build-wasm:
    type: "system"
    command:
      - "bash"
    args:
      - "./scripts/build-wasm.sh"
    outputs:
      - "main.wasm"

			`;

runYamlFmt(foo).then((f) => console.log(f));

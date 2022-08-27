import { runYamlFmt } from "@js-yamlfmt/wasm";

const foo = `
type: "tool"
language: "typescript"
project:
  name: "node"
  description: "yamlfmt CLI working on Node.js"
  owner: "sosukesuzuki"
  maintainers: ["sosukesuzuki"]
  channel: "#na"

dependsOn:
  - "wasm"

workspace:
  inheritedTasks:
    rename:
      buildPackage: "build"

tasks:
  typecheck:
    args:
      - "--force"
`;

runYamlFmt(foo).then((f) => console.log(f));

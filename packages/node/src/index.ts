import { runYamlFmt } from "@js-yamlfmt/wasm";

const foo = `
type: "library"
foo:
- bar
- baz
`;

runYamlFmt(foo).then((f) => console.log(f));

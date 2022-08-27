# `@js-yamlfmt/wasm`

[yamlfmt](https://github.com/google/yamlfmt) JavaScript library.

Works on Node.js and Browsers(module bundlers).

## Usage

```js
import { runYamlFmt } from "@js-yamlfmt/wasm";

const code = `
foo
- bar
- baz
`:

const result = runYamlFmt(code);
/*
foo
  - bar
  - baz
*/
```

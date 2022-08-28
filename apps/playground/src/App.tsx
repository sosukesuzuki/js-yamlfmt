import { FC, useCallback } from "react";
const code = `
foo:
- bar
- baz
`;
export const App: FC = () => {
  const run = useCallback(async () => {
    const { runYamlFmt } = await import("@js-yamlfmt/wasm");
    const result = await runYamlFmt(code);
    console.log(result);
  }, []);
  return (
    <div>
      <h1>sample</h1>
      <button onClick={run}>button</button>
    </div>
  );
};

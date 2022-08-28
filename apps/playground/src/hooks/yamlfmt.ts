import { useState, useEffect } from "react";

function useRunFormatYaml(): ((source: string) => Promise<string>) | null {
  const [runYamlFmt, setRunYamlFmt] = useState<
    ((source: string) => Promise<string>) | null
  >(null);
  useEffect(() => {
    (async () => {
      const { runYamlFmt } = await import("@js-yamlfmt/wasm");
      setRunYamlFmt(() => runYamlFmt);
    })();
  }, []);
  return runYamlFmt;
}

export function useFormattedYaml(source: string): string {
  const [formattedYaml, setFormattedYaml] = useState("");
  const runYamlFormat = useRunFormatYaml();
  useEffect(() => {
    if (runYamlFormat) {
      runYamlFormat(source).then((value) => {
        setFormattedYaml(value);
      });
    }
  }, [source]);
  return formattedYaml;
}

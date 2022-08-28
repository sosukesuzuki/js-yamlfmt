import { Box, Flex, Heading } from "@chakra-ui/react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { useAtom } from "jotai";
import type { editor } from "monaco-editor";
import { FC, useCallback, useEffect, useRef } from "react";
import { useBorderColor, useMonacoThemeValue } from "../hooks/colors";
import { useFormattedYaml } from "../hooks/yamlfmt";
import { codeAtom } from "../state";

export const OutputEditor: FC = () => {
  const [code] = useAtom(codeAtom);
  const formattedCode = useFormattedYaml(code);
  const borderColor = useBorderColor();
  const monaco = useMonaco();
  const monacoTheme = useMonacoThemeValue();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  useEffect(() => {
    monaco?.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSyntaxValidation: true,
      noSemanticValidation: true,
      noSuggestionDiagnostics: true,
    });
  }, [monaco]);
  const handleEditorMount = useCallback(
    (instance: editor.IStandaloneCodeEditor) => {
      editorRef.current = instance;
    },
    []
  );
  return (
    <Flex direction="column" width="full" height="full">
      <Heading size="md">Output</Heading>
      <Box
        width="full"
        height="full"
        borderColor={borderColor}
        borderWidth="1px"
      >
        <Editor
          value={formattedCode}
          language="yaml"
          theme={monacoTheme}
          onMount={handleEditorMount}
        />
      </Box>
    </Flex>
  );
};

import { Box, Flex, Heading } from "@chakra-ui/react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { useAtom } from "jotai";
import type { editor } from "monaco-editor";
import { FC, useCallback, useEffect, useRef } from "react";
import { useBorderColor, useMonacoThemeValue } from "../hooks/colors";
import { codeAtom } from "../state";

export const InputEditor: FC = () => {
  const [code, setCode] = useAtom(codeAtom);
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
  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value != null) {
      setCode(value);
    }
  }, []);
  return (
    <Flex direction="column" width="full" height="full">
      <Heading size="md">Input</Heading>
      <Box
        width="full"
        height="full"
        borderColor={borderColor}
        borderWidth="1px"
      >
        <Editor
          value={code}
          language="yaml"
          theme={monacoTheme}
          onChange={handleEditorChange}
          onMount={handleEditorMount}
        />
      </Box>
    </Flex>
  );
};

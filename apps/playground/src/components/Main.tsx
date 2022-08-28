import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { InputEditor } from "../components/InputEditor";
import { useBgColor } from "../hooks/colors";
import { OutputEditor } from "../components/OutputEditor";

export const Main: FC = () => {
  const bgColor = useBgColor();
  return (
    <div>
      <Header />
      <Flex
        width="full"
        height="calc(100vh - 56px - 8px)"
        bg={bgColor}
        p="4"
        gap="4"
      >
        <InputEditor />
        <OutputEditor />
      </Flex>
    </div>
  );
};

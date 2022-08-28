import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./components/Main";

export const App: FC = () => {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
};

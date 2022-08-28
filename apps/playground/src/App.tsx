import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";

export const App: FC = () => {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
};

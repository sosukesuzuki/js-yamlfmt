import { Flex, Heading, Link } from "@chakra-ui/react";
import { FC } from "react";
import { useHeaderBgColor, useHeaderBorderColor } from "../hooks/colors";

export const Header: FC = () => {
  const bgColor = useHeaderBgColor();
  const borderColor = useHeaderBorderColor();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="56px"
      bg={bgColor}
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      px={[2, 2, 5]}
      py="2"
    >
      <Heading>@js-yamlfmt/playground</Heading>
      <Link isExternal href="https://github.com/sosukesuzuki/js-yamlfmt">
        GitHub
      </Link>
    </Flex>
  );
};

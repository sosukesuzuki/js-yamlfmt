import { useColorModeValue } from "@chakra-ui/react";

export function useMonacoThemeValue() {
  return useColorModeValue("light", "vs-dark");
}

export function useBorderColor() {
  return useColorModeValue("gray.400", "gray.600");
}

export function useBgColor() {
  return useColorModeValue("white", "gray.700");
}

export function useHeaderBgColor() {
  return useColorModeValue("gray.100", "gray.900");
}

export function useHeaderBorderColor() {
  return useColorModeValue("gray.300", "gray.700");
}

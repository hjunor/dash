import { ButtonProps } from "@chakra-ui/react";

export const buttonPropsIsCurrent = {
  size: "sm",
  fontSize: "xs",
  width: "4",
  colorScheme: "pink",
  disabled: true,
  _disabled: { bg: "pink.500", cursor: "default" },
} as ButtonProps;

export const buttonPropsIsNotCurrent = {
  size: "sm",
  fontSize: "xs",
  width: "4",
  bg: "gray.700",
  _hover: { bg: "gray.500" },
} as ButtonProps;

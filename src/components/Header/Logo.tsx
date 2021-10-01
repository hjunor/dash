import { Text } from "@chakra-ui/react";
interface ILogo {
  showLogoData?: boolean;
}
export function Logo({ showLogoData }: ILogo) {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      {showLogoData ? "Dash HJunor" : "DHjunor"}
      <Text as="span" ml="1" color="pink.500">
        !
      </Text>
    </Text>
  );
}

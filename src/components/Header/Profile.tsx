import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface IProfile {
  showProfileData?: boolean;
}
export function Profile({ showProfileData }: IProfile) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="left">
          <Text fontWeight="bold">Heberth Junor</Text>
          <Text color="gray.300" fontSize="small">
            hjunor@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Heberth Junor"
        src="https://github.com/hjunor.png"
      />
    </Flex>
  );
}

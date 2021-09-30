import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearch2Line,
  RiUserAddLine,
} from "react-icons/ri";
export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dash HJunor
        <Text as="span" ml="3" color="pink.500">
          !
        </Text>
      </Text>
      <Flex
        as="label"
        flex="4"
        px="8"
        py="4"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.500"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearch2Line} fontSize="20" />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
          spacing="4"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="left">
            <Text fontWeight="bold">Heberth Junor</Text>
            <Text color="gray.300" fontSize="small">
              hjunor@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Heberth Junor"
            src="https://github.com/hjunor.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

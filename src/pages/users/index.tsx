import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px={["2", "6"]}>
        <Sidebar />
        <Box flex="1" borderRadius={8} padding="8" bg="gray.800">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Lista de Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                pr={[1, "3"]}
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                {isWideVersion ? "Criar novo Usuário" : ""}
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                {isWideVersion && <Th>Data de cadastros</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {[0, 0, 0, 0, 0, 0].map((_, index) => (
                <Tr key={index}>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Heberth Junor</Text>
                      <Text fontSize="sm" color="gray.300">
                        hjuno@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de Abril, 2001</Td>}
                  <Td>
                    <Button
                      w={isWideVersion && "20"}
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="blue"
                      pr={[0, "3"]}
                      leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                    >
                      {isWideVersion ? "Editar " : ""}
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}

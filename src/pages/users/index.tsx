import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
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
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { useQuery } from "react-query";
import { formatDate } from "../../utils/formatDate";

type FetchQuery = {
  data: [
    {
      id: string;
      name: string;
      email: string;
      createdAt: string;
    }
  ];

  isLoading: boolean;
  error: boolean;
};

interface FetchUserQuery {
  users: [
    {
      id: string;
      name: string;
      email: string;
      createdAt: string;
    }
  ];
}
export default function UserList() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const { data, isLoading, error }: FetchQuery = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data: FetchUserQuery = await response.json();

    const users = await data.users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: formatDate(user.createdAt),
      };
    });
    return users;
  });

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

          {isLoading ? (
            <Flex height="10" align="center" justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">Falha ao obter lista de usuários</Flex>
          ) : (
            <>
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
                  {data.map((user) => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      <Td>
                        <Button
                          isLoading={isLoading}
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
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

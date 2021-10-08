import { AppProps } from "next/app";
import { ChakraProvider as Provider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";
if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <Provider theme={theme}>
          <Component {...pageProps} />
        </Provider>
      </SidebarDrawerProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;

import { AppProps } from "next/app";
import { ChakraProvider as Provider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import { makeServer } from "../services/mirage";

if (process.env.NODE_ENV === "development") {
  makeServer();
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <Provider theme={theme}>
        <Component {...pageProps} />
      </Provider>
    </SidebarDrawerProvider>
  );
}

export default MyApp;

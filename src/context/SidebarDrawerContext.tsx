import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
interface ISidebarDrawerProvider {
  children: ReactNode;
}
type TSidebarDrawerContext = UseDisclosureReturn;
const SidebarDrawerContext = createContext({} as TSidebarDrawerContext);

export function SidebarDrawerProvider({ children }: ISidebarDrawerProvider) {
  const disclosure = useDisclosure();

  const router = useRouter();
  useEffect(() => {
    disclosure.onClose();
    
  }, [router.asPath]);
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}
export const useSidebarDrawer = () => useContext(SidebarDrawerContext);

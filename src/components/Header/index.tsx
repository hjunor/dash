import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuFill, RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { flexProps } from "./styles.props";

export default function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex {...flexProps}>
      {!isWideVersion && (
        <IconButton
          aria-label="Open Drawer"
          icon={<Icon as={RiMenuFill} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="1"
          mt="-1"
        ></IconButton>
      )}
      <Logo showLogoData={isWideVersion} />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}

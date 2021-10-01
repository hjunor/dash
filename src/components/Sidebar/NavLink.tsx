import { Icon, Link as CLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { useRouter } from "next/dist/client/router";
import { ActiveLink } from "../ActiveLink";
interface INavLink extends LinkProps {
  icon: ElementType;
  text: string;
  href: string;
}
export function NavLink({ icon, href, text, ...rest }: INavLink) {
  return (
    <ActiveLink href={href} passHref>
      <CLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {text}
        </Text>
      </CLink>
    </ActiveLink>
  );
}

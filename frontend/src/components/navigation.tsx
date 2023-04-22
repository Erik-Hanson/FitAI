import { Box, Button, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Logout from "@/components/logout";
import LoginButton from "@/components/login";

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return (
    <Button
      px={4}
      py={2}
      variant="ghost"
      _hover={{ bg: "gray.700" }}
      _focus={{ outline: "none" }}
    >
      {children}
    </Button>
  );
};

const Navigation: React.FC = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={4}>
      {props.user ? (
        <Box
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          pl={4}
        >
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
        </Box>
      ) : null}

      <Spacer />

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {!props.user ? (
          <>
            {/* <Button variant="ghost" _hover={{ bg: "gray.700" }}>
                            <Link href="/login">Sign In/Sign Up</Link>
                        </Button> */}
            <LoginButton />
          </>
        ) : null}
        {props.user ? <Logout /> : null}
      </Box>
    </Flex>
  );
};

export default Navigation;

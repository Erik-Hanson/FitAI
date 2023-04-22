import { Box, Button, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Logout from "@/components/logout";
import LoginButton from "@/components/login";
import { useUser } from "@auth0/nextjs-auth0/client";

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

const Navigation: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={4}>
      {user ? (
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
        {!user ? (
          <>
            {/* <Button variant="ghost" _hover={{ bg: "gray.700" }}>
                            <Link href="/login">Sign In/Sign Up</Link>
                        </Button> */}
            <LoginButton />
          </>
        ) : null}
        {user ? <Logout /> : null}
      </Box>
    </Flex>
  );
};

export default Navigation;
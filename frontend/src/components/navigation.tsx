import {
    Box,
    Button,
    Flex,
    Spacer,
    useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavItem: React.FC = ({ children }: any) => {
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

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            p={4}
        >
            <Box
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                pl={4}
            >
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </Box>

            <Spacer />

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Button variant="ghost" _hover={{ bg: "gray.700" }}>
                    Sign In
                </Button>
                <Button
                    ml={4}
                >
                    Sign Up
                </Button>
            </Box>
        </Flex>
    );
};

export default Navigation;

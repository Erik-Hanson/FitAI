import LoginButton from "@/components/login";
import Logout from "@/components/logout";
import Navigation from "@/components/navigation";
import { VStack, Center } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Navigation></Navigation>
      <Center h="100vh" w="100vw">
        <VStack spacing={4}>
          <h2>Welcome to FitAI</h2>
          <h2>Log in to get started</h2>
          {/* <LoginButton /> */}
        </VStack>
      </Center>
    </>
  );
}

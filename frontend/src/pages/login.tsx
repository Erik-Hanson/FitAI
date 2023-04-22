import LoginButton from "@/components/login";
import Logout from "@/components/logout";
import Navigation from "@/components/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { VStack, Center } from "@chakra-ui/react";

export default function Login() {
  const { user } = useUser();

  return (
    <>
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

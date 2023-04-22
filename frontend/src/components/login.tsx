import styles from "@/styles/Home.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Login() {
  // return <a href="/api/auth/login">Login</a>;
  const router = useRouter();

  const handleClick = () => {
    router.push("/api/auth/login");
  };

  return (
    <>
      <Button colorScheme="blue" variant="outline" _hover={{ bg: "gray.700" }} onClick={handleClick}>
        Sign In/Sign Up
      </Button>
    </>
  );
}

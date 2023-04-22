import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Logout() {
  return (
    <>
      <Button colorScheme="blue" variant="outline" _hover={{ bg: "gray.700" }}>
        <Link href="/api/auth/logout">Sign Out</Link>
      </Button>
    </>
  );
}

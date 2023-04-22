import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navigation from "@/components/navigation";

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }

// const theme = extendTheme({ config });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider>
        <Navigation></Navigation>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

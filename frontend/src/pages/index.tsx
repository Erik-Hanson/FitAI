import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Login from "@/components/login";
import Logout from "@/components/logout";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  console.log(user);
  console.log(error);
  console.log(isLoading);

  useEffect(() => {
    if (!isLoading && !user && !error) {
      router.push("/login");
    }
  }, [user, isLoading, error]);

  return (
    <>
      <Head>
        <title>FitAI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>{user ? <Logout /> : null}</main>
    </>
  );
}

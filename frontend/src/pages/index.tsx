import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Login from "@/components/login";
import Logout from "@/components/logout";
import Calendar from "@/components/calendar";
import Logger from "@/components/logger";
import Navigation from "@/components/navigation";
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  // type AppUser = {
  //   sub: string;
  //   // Add any other necessary properties for the User type
  // };

  // const mapUserToAppUser = (userProfile: UserProfile): AppUser | null => {
  //   if (!userProfile.sub) return null;

  //   return {
  //     sub: userProfile.sub,
  //     // Map any other necessary properties
  //   };
  // };

  // const appUser = user ? mapUserToAppUser(user) : null;

  interface User {
    sub: string;
    name: string;
  }

  const mapUserToAppUser = (userProfile: UserProfile): User | null => {
    if (!userProfile.sub || !userProfile.name) return null;

    return {
      sub: userProfile.sub,
      name: userProfile.name,
    };
  };

  const { user, error, isLoading } = useUser();
  const appUser = user ? mapUserToAppUser(user) : null;
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  //  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const createUserDocument = async () => {
      if (user && user.sub) {
        const userString = user.name + "-" + user.sub;
        const userRef = doc(firestore, "users", userString);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
          const createdAt = new Date();
          await setDoc(userRef, {
            auth0UserId: user.sub,
            createdAt,
          });

          // Create an empty food diary with no entries
          const today = new Date().toISOString().split("T")[0];
          const foodDiariesRef = collection(userRef, "foodDiaries");
          const foodDiaryRef = doc(foodDiariesRef, today);

          await setDoc(foodDiaryRef, {
            date: new Date(today),
            entries: [],
          });
        }
      }
    };

    createUserDocument();

    if (!isLoading && !user && !error) {
      router.push("/login");
    }
  }, [user, isLoading, error, router]);

  return (
    <>
      <Head>
        <title>FitAI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <main className={styles.main}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem colSpan={4}>
              {appUser && <Logger user={appUser} currentDate={selectedDate}></Logger>}
            </GridItem>
            <GridItem colSpan={1}>
              <Calendar onDateSelect={handleDateSelect}></Calendar>
            </GridItem>
          </Grid>
          {user ? (
            <h1>
              Welcome {user.name} {user.sub}
            </h1>
          ) : null}
        </main>
    </>
  );
}

import React, { useState } from "react";
import { Heading, Textarea, Button, VStack } from "@chakra-ui/react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { firestore } from "../../firebase";

interface User {
  sub: string;
  name: string;
}

interface Entry {
  foodName: string;
  calories: number;
  servingSize: string;
}

interface Message {
  sender: string;
  text: string;
}

interface LoggerProps {
  user: User;
}

const Logger: React.FC<LoggerProps> = ({ user }) => {
  const [mealDescription, setMealDescription] = useState("");

  const currentDate = new Date().toISOString().slice(0, 10);

  const userString = user ? `${user.name}-${user.sub}` : "";
  const foodDiariesRef =
    user && collection(firestore, "users", userString!, "foodDiaries");
  const diaryDocRef = foodDiariesRef && doc(foodDiariesRef, currentDate);

  const chatHistoryRef =
    user && collection(firestore, "users", userString!, "chatHistory");
  const chatDocRef = chatHistoryRef && doc(chatHistoryRef, currentDate);

  const [diaryData] = useDocumentData(diaryDocRef);
  const [chatData] = useDocumentData(chatDocRef);

  const handleSubmit = async () => {
    if (user && mealDescription) {
      const newEntry = {
        foodName: mealDescription,
        calories: 0,
        servingSize: "unknown",
      }; // Replace with actual data fetched from the food API

      if (!diaryData) {
        await setDoc(diaryDocRef, {
          date: currentDate,
          entries: [newEntry],
        });
      } else {
        const updatedEntries = [...diaryData.entries, newEntry];
        await setDoc(diaryDocRef, {
          date: currentDate,
          entries: updatedEntries,
        });
      }

      const userMessage: Message = {
        sender: userString,
        text: mealDescription,
      };

      if (!chatData) {
        await setDoc(chatDocRef, {
          date: currentDate,
          messages: [userMessage],
        });
      } else {
        await updateDoc(chatDocRef, {
          messages: arrayUnion(userMessage),
        });
      }

      // Add AI response
      //   const aiMessage: Message = {
      //     sender: "AI",
      //     text: `${newEntry.foodName} - ${newEntry.calories} calories - ${newEntry.servingSize}`,
      //   };
      //   await updateDoc(chatDocRef, {
      //     messages: arrayUnion(aiMessage),
      //   });

      setMealDescription("");
    }
  };

  return (
    <>
      <Heading pb={2}>Food Logger</Heading>
      <VStack>
        <Textarea
          placeholder="Enter your meal description here"
          value={mealDescription}
          onChange={(e) => setMealDescription(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        {diaryData?.entries &&
          diaryData.entries.map((entry: Entry, index: number) => (
            <div key={index}>
              {entry.foodName} - {entry.calories} calories - {entry.servingSize}
            </div>
          ))}
        {chatData?.messages &&
          chatData.messages.map((message: Message, index: number) => (
            <div key={index}>
              {message.sender === userString ? "You" : "AI"}: {message.text}
            </div>
          ))}
      </VStack>
    </>
  );
};

export default Logger;

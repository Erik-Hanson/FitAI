import axios from "axios";
import React, { useState } from "react";
import {
  Heading,
  Textarea,
  Button,
  VStack,
  Grid,
  GridItem,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDocumentData } from "react-firebase-hooks/firestore";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { firestore } from "../../firebase";
import ClearChatButton from "./clearChatButton";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const API_BASE_URL = publicRuntimeConfig.API_BASE_URL;

//console.log("api_base_url: " + API_BASE_URL);
interface FoodEntryData {
  text: string;
}

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
  currentDate: string;
}

const Logger: React.FC<LoggerProps> = ({ user, currentDate }) => {
  const [mealDescription, setMealDescription] = useState("");

  const userString = user ? `${user.name}-${user.sub}` : "";
  const foodDiariesRef =
    user && collection(firestore, "users", userString!, "foodDiaries");
  const diaryDocRef = foodDiariesRef && doc(foodDiariesRef, currentDate);

  const chatHistoryRef =
    user && collection(firestore, "users", userString!, "chatHistory");
  const chatDocRef = chatHistoryRef && doc(chatHistoryRef, currentDate);

  const [diaryData] = useDocumentData(diaryDocRef);
  const [chatData] = useDocumentData(chatDocRef);

  const testApiConnection = async () => {
    try {
      console.log("Testing API connection...");
      const response = await axios.get(`${API_BASE_URL}/test_connection`);
      console.log("API connection test:", response.data);
    } catch (error) {
      console.error("Error testing API connection:", error);
    }
  };

  const handleDeleteEntry = async (index: number) => {
    if (diaryData) {
      const updatedEntries = diaryData.entries.filter(
        (_: Entry, i: number) => i !== index
      );
      await setDoc(diaryDocRef, {
        date: currentDate,
        entries: updatedEntries,
      });
    }
  };

  const handleDeleteMessage = async (index: number) => {
    if (chatData) {
      const updatedMessages = chatData.messages.filter(
        (_: Message, i: number) => i !== index
      );
      await setDoc(chatDocRef, {
        date: currentDate,
        messages: updatedMessages,
      });
    }
  };

  const handleSendFoodEntry = async (
    userInput: string
  ): Promise<{ food_name: string }> => {
    try {
      const food_entry_data: FoodEntryData = {
        text: userInput,
      };
      console.log("food_entry_data", food_entry_data);

      const response = await axios.post(
        `${API_BASE_URL}/create_food_entry`,
        food_entry_data
      );
      console.log("response", response.data);
      const food_name = response.data.text.food_name;
      console.log("food_name: in ", food_name);
      return { food_name };
    } catch (error) {
      console.error("Error sending food entry data:", error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (user && mealDescription) {
      const { food_name } = await handleSendFoodEntry(mealDescription);
      console.log("food_name:", food_name);

      const newEntry = {
        foodName: food_name,
        calories: 0,
        servingSize: "unknown",
      };

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

        <GridItem colSpan={1}>
          {user && <ClearChatButton user={user!} currentDate={currentDate} />}
        </GridItem>
        <Button onClick={handleSubmit}>Submit</Button>
        {diaryData?.entries &&
          diaryData.entries.map((entry: Entry, index: number) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={3}
              my={2}
            >
              {entry.foodName} - {entry.calories} calories - {entry.servingSize}
              <IconButton
                aria-label="Delete entry"
                icon={<DeleteIcon />}
                isRound
                onClick={() => handleDeleteEntry(index)}
                size="sm"
                ml={2}
              />
            </Box>
          ))}
        {chatData?.messages &&
          chatData.messages.map((message: Message, index: number) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={3}
              my={2}
            >
              {message.sender === userString ? "You" : "AI"}: {message.text}
              <IconButton
                aria-label="Delete message"
                icon={<DeleteIcon />}
                isRound
                onClick={() => handleDeleteMessage(index)}
                size="sm"
                ml={2}
              />
            </Box>
          ))}
      </VStack>
    </>
  );
};

export default Logger;

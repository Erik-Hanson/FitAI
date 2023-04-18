import React, { useState } from "react";
import { Heading, Textarea, Button, VStack } from "@chakra-ui/react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

interface User {
  sub: string;
}

interface Entry {
  foodName: string;
  calories: number;
  servingSize: string;
}

interface LoggerProps {
  user: User;
}

const Logger: React.FC<LoggerProps> = ({ user }) => {
  const [mealDescription, setMealDescription] = useState("");

  const currentDate = new Date().toISOString().slice(0, 10);

  const foodDiariesRef =
    user && collection(firestore, "users", user.sub, "foodDiaries");
  const diaryDocRef = foodDiariesRef && doc(foodDiariesRef, currentDate);
  const [diaryData] = useDocumentData(diaryDocRef);

  const handleSubmit = async () => {
    if (user && mealDescription) {
      const newEntry = {
        foodName: mealDescription,
        calories: 0,
        servingSize: "unknown",
      }; // Replace with actual data fetched from the food API
      const updatedEntries = diaryData?.entries
        ? [...diaryData.entries, newEntry]
        : [newEntry];

      await setDoc(diaryDocRef, { date: currentDate, entries: updatedEntries });

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
      </VStack>
    </>
  );
};

export default Logger;

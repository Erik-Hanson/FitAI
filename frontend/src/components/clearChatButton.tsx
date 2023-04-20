import React from "react";
import { Button } from "@chakra-ui/react";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

interface ClearChatButtonProps {
  user: {
    sub: string;
    name: string;
  };
  currentDate: string;
}

const ClearChatButton: React.FC<ClearChatButtonProps> = ({
  user,
  currentDate,
}) => {
  const userString = user ? `${user.name}-${user.sub}` : "";
  const chatHistoryRef =
    user && collection(firestore, "users", userString, "chatHistory");
  const chatDocRef = chatHistoryRef && doc(chatHistoryRef, currentDate);

  const handleClearChat = async () => {
    if (chatDocRef) {
      await deleteDoc(chatDocRef);
    }
  };

  return <Button onClick={handleClearChat}>Clear Chat History</Button>;
};

export default ClearChatButton;

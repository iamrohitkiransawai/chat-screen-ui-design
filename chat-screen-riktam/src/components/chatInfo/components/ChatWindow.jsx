import { Avatar, List, ListItemAvatar, ListItemText } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  StyledAvatar,
  StyledList,
  StyledListItem,
  StyledListItemText,
  StyledMainDiv,
  StyledPaper,
} from "../styles";
import CustomTextField from "./CustomTextField";
import useWindowDimensions from "./useWindowDimensions";

const ChatWindow = () => {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [listRef]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "receiver",
      text: "Hello, How are you?",
    },
    {
      id: 2,
      type: "sender",
      text: "Hello, How are you?",
    },
    {
      id: 3,
      type: "receiver",
      text: "Hello, How are you?",
    },
    {
      id: 4,
      type: "sender",
      text: "Hello, How are you?",
    },
    {
      id: 5,
      type: "receiver",
      text: "Hello, How are you?",
    },
    {
      id: 6,
      type: "sender",
      text: "Hello, How are you?",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const { height } = useWindowDimensions();

  const handleSendMessage = () => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        type: "sender",
        text: newMessage,
      },
    ]);
    setNewMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <StyledMainDiv>
      <StyledPaper height={height - 40}>
        <StyledList ref={listRef}>
          {messages.map((message) => (
            <StyledListItem
              key={message.id}
              className={`${
                message.type === "receiver"
                  ? "receiverMessage"
                  : "senderMessage"
              }`}
            >
              {message.type === "receiver" && (
                <ListItemAvatar>
                  <StyledAvatar className={"receiverMessage"}>R</StyledAvatar>
                </ListItemAvatar>
              )}

              <StyledListItemText
                primary={message.text}
                className={`${
                  message.type === "receiver"
                    ? "receiverMessageText"
                    : "senderMessageText"
                }`}
              />

              {message.type === "sender" && (
                <ListItemAvatar>
                  <StyledAvatar className={"senderMessage"}>S</StyledAvatar>
                </ListItemAvatar>
              )}
            </StyledListItem>
          ))}
        </StyledList>
        <CustomTextField
          textValue={newMessage}
          textChange={setNewMessage}
          keyDownEventText={handleKeyDown}
          btnClick={handleSendMessage}
        />
      </StyledPaper>
    </StyledMainDiv>
  );
};

export default ChatWindow;

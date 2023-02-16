import { Avatar, List, ListItemAvatar, ListItemText } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  StyledAvatar,
  StyledDot,
  StyledList,
  StyledListItem,
  StyledListItemText,
  StyledMainDiv,
  StyledPaper,
} from "../styles";
import CustomTextField from "./CustomTextField";
import useWindowDimensions from "./useWindowDimensions";
import { SENDER, RECEIVER } from "../../../constants";

const ChatWindow = ({ senderActiveStatus }) => {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [listRef]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: RECEIVER,
      text: "Hello, How are you?",
    },
    {
      id: 2,
      type: SENDER,
      text: "Hello, How are you?",
    },
    {
      id: 3,
      type: RECEIVER,
      text: "Hello, How are you?",
    },
    {
      id: 4,
      type: SENDER,
      text: "Hello, How are you?",
    },
    {
      id: 5,
      type: RECEIVER,
      text: "Hello, How are you?",
    },
    {
      id: 6,
      type: SENDER,
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
        type: SENDER,
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
                message.type === RECEIVER ? "receiverMessage" : "senderMessage"
              }`}
            >
              {message.type === RECEIVER && (
                <div style={{ position: "relative" }}>
                  <ListItemAvatar>
                    <StyledAvatar className={"receiverMessage"}>R</StyledAvatar>
                    <StyledDot position="left" active={true} />
                  </ListItemAvatar>
                </div>
              )}

              <StyledListItemText
                primary={message.text}
                className={`${
                  message.type === RECEIVER
                    ? "receiverMessageText"
                    : "senderMessageText"
                }`}
              />

              {message.type === SENDER && (
                <div style={{ position: "relative" }}>
                  <ListItemAvatar>
                    <StyledAvatar className={"senderMessage"}>S</StyledAvatar>
                    <StyledDot position="right" active={senderActiveStatus} />
                  </ListItemAvatar>
                </div>
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

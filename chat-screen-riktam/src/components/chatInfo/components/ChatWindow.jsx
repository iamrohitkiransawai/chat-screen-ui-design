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
import { dateTimeReadInHumanizeIntl } from "../../../utils";

const ChatWindow = ({
  senderActiveStatus,
  chats,
  senderAvatar,
  receiverAvatar,
}) => {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [listRef]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: RECEIVER,
      text: "Hello, How are you?",
      time: Date.now() + 1000,
    },
    {
      id: 2,
      type: SENDER,
      text: "Hello, How are you?",
      time: Date.now() + 2000,
    },
    {
      id: 3,
      type: RECEIVER,
      text: "Hello, How are you?",
      time: Date.now() + 3000,
    },
    {
      id: 4,
      type: SENDER,
      text: "Hello, How are you?",
      time: Date.now() + 4000,
    },
    {
      id: 5,
      type: RECEIVER,
      text: "Hello, How are you?",
      time: Date.now() + 5000,
    },
    {
      id: 6,
      type: SENDER,
      text: "Hello, How are you?",
      time: Date.now() + 6000,
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
          {chats.map((message) => (
            <StyledListItem
              key={message.id + 1000}
              className={`${
                message.type === RECEIVER ? "receiverMessage" : "senderMessage"
              }`}
            >
              {message.type === RECEIVER && (
                <div style={{ position: "relative" }}>
                  <ListItemAvatar>
                    <StyledAvatar
                      src={receiverAvatar}
                      className={"receiverMessage"}
                    />
                    <StyledDot position="left" active={true} />
                  </ListItemAvatar>
                </div>
              )}

              <StyledListItemText
                primary={message.message}
                time={dateTimeReadInHumanizeIntl(message.time)}
                className={`${
                  message.type === RECEIVER
                    ? "receiverMessageText"
                    : "senderMessageText"
                }`}
              />

              {message.type === SENDER && (
                <div style={{ position: "relative" }}>
                  <ListItemAvatar>
                    <StyledAvatar
                      src={senderAvatar}
                      className={"senderMessage"}
                    />
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

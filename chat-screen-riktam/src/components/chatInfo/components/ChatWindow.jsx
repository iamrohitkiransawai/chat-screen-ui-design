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
  receiver,
  saveMsgToStore,
}) => {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [listRef]);

  const [newMessage, setNewMessage] = useState("");
  const { height } = useWindowDimensions();

  const handleSendMessage = () => {
    saveMsgToStore(newMessage);
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
                      src={receiver.avatar}
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

import {
  Avatar,
  Grid,
  List,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import {
  ChatContainer,
  MessageItem,
  MessageList,
  SendButton,
  MessageInput,
  MessageInputContainer,
} from "./styles";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { messageSelector } from "../../slices";

const ChatInfo = () => {
  const [message, setMessage] = useState("");
  const messages = useSelector(messageSelector);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      messagesSlice.actions.addMessage({
        text: message,
        isSentByUser: true,
      })
    );
    setMessage("");
  };
  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      <ChatContainer>
        <MessageList>
          <List>
            {messages &&
              messages.map((message, index) => (
                <MessageItem
                  key={index}
                  align={message.isSentByUser ? "right" : "left"}
                >
                  {!message.isSentByUser && (
                    <ListItemAvatar>
                      <Avatar>O</Avatar>
                    </ListItemAvatar>
                  )}
                  <ListItemText primary={message.text} />
                  {message.isSentByUser && (
                    <ListItemAvatar>
                      <Avatar>U</Avatar>
                    </ListItemAvatar>
                  )}
                </MessageItem>
              ))}
          </List>
        </MessageList>
      </ChatContainer>
      <MessageInputContainer>
        <MessageInput
          label="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SendButton type="submit" onClick={handleSubmit}>
          <SendIcon />
        </SendButton>
      </MessageInputContainer>
    </Grid>
  );
};

export default ChatInfo;

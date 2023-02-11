import { IconButton, ListItem, TextField } from "@mui/material";
import styled from "styled-components";

export const ChatContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const MessageList = styled.div`
  flex: 1;
`;

export const MessageItem = styled(ListItem)`
  align-self: ${(props) => props.align};
  margin: 10px 0;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f2f2f2;
  position: absolute;
  bottom: 0;
`;

export const MessageInput = styled(TextField)`
  flex: 1;
  margin-right: 10px;
`;

export const SendButton = styled(IconButton)`
  padding: 10px;
`;

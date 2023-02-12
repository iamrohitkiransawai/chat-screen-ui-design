import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
`;

export const TextFieldContainer = styled(TextField)`
  width: auto;
`;

export const ButtonContainer = styled(Button)`
  padding: 6px 12px;
`;

export const StyledMainDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px;
`;

export const StyledPaper = styled(Paper)`
  grid-row: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height}px;
  max-width: 100%;
  background-color: #fafafa;
  padding: 10px;
`;

export const StyledList = styled(List)`
  flex-grow: 1;
  overflow-y: auto;
`;

export const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: ${(props) =>
    props.className === "receiverMessage" ? "flex-start" : "flex-end"};
  align-items: center;
  margin-bottom: 10px;
  padding-left: ${(props) =>
    props.className === "receiverMessage" ? "16px" : "0"};
  padding-right: ${(props) =>
    props.className === "senderMessage" ? "16px" : "0"};
`;

export const StyledListItemText = styled(ListItemText)`
  margin: ${(props) => (props.className === "receiverMessage" ? 0 : "0, 10px")};
  padding: 0;
  width: fit-content;
  background-color: ${(props) =>
    props.className === "receiverMessageText" ? "#e6e6e6" : "#81c784"};
  color: ${(props) =>
    props.className === "receiverMessageText" ? "#333" : "#fff"};
  border-radius: 5px;
  padding: 10px;
`;

export const StyledAvatar = styled(Avatar)`
  margin-left: ${(props) =>
    props.className === "senderMessage" ? "10px" : "0"};
  margin-right: ${(props) =>
    props.className === "receiverMessage" ? "10px" : "0"};
`;

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
    props.className === "receiverMessage" ? "flex-end" : "flex-start"};
  align-items: center;
  margin-bottom: 10px;
  padding-left: ${(props) =>
    props.className === "receiverMessage" ? "0" : "16px"};
  padding-right: ${(props) =>
    props.className === "senderMessage" ? "0" : "16px"};
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
    props.className === "receiverMessage" ? "0px" : "0"};
`;

export const StyledDot = styled.div`
  position: absolute;
  bottom: 0;
  ${(props) => (props.position === "left" ? "right: 0" : "right: 0")};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#4caf50" : "#ccc")};
  margin-right: ${(props) => (props.position === "left" ? "20px" : "10px")};
  border: ${(props) => (props.active ? "1px solid #4caf50" : "1px solid #fff")};
`;

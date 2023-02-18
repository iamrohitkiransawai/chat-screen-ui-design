import React from "react";
import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Dot } from "../styles";

const UserListItem = ({ user }) => {
  return (
    <ListItemButton
      sx={{
        borderRadius: 2.5,
        margin: 1.5,
        padding: 1.3,
        backgroundColor: "#B5EAEA",
      }}
    >
      <ListItemAvatar>
        <Avatar alt={user.name} src={user.avatar} />
      </ListItemAvatar>
      <ListItemText
        sx={{ fontWeight: "bold" }}
        id={user.id}
        primary={
          <Typography variant="body2" style={{ color: "#000" }}>
            {user.name}
          </Typography>
        }
      />
      {user.unreadMessageCount > 0 && (
        <Dot dotColor={"#ff165d"} textColor={"#fff"}>
          {user.unreadMessageCount}
        </Dot>
      )}
    </ListItemButton>
  );
};

export default UserListItem;

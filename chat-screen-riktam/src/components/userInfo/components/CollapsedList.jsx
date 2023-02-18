import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { Dot } from "../styles";
import UserListItem from "./UserListItem";

export default function CollapsedList({
  users,
  listName,
  totalUnreadCount,
  defaultCollapseState = true,
}) {
  const [open, setOpen] = useState(defaultCollapseState);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          sx={{ fontWeight: "bold" }}
          primary={
            <Typography variant="body1">
              {listName}
              &nbsp;
              <Dot dotColor={"#DCD7C9"} textColor={"#000"}>
                {users.filter((user) => user.isActive === true).length}
              </Dot>
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {users.map((user, index) => {
            return <UserListItem key={index} user={user} />;
          })}
        </List>
      </Collapse>
    </>
  );
}

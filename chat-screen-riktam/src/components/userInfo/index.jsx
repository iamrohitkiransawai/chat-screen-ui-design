import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { senderDataSelector } from "../../slices/senderSlice";
import { getListOfUsers } from "../../utils";
import CollapsedList from "./components/CollapsedList";
import UserInfoComp from "./components/UserInfoComp";

const UserInfo = () => {
  const senderData = useSelector(senderDataSelector);

  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <UserInfoComp
        name={senderData.senderName}
        avatar={senderData.avatar}
        designation={senderData.designation}
        active={senderData.activeStatus}
      />

      <CollapsedList
        users={getListOfUsers()}
        listName={"Active Conversations"}
        totalUnreadCount={5}
        defaultCollapseState={true}
      />

      <CollapsedList
        users={getListOfUsers()}
        listName={"Archive Conversations"}
        totalUnreadCount={10}
        defaultCollapseState={false}
      />
    </Grid>
  );
};

export default UserInfo;

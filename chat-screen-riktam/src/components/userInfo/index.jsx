import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeChangeInSenderStatus,
  senderDataSelector,
} from "../../slices/senderSlice";
import { getListOfUsers } from "../../utils";
import CollapsedList from "./components/CollapsedList";
import UserInfoComp from "./components/UserInfoComp";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { senderName, avatar, designation, activeStatus } =
    useSelector(senderDataSelector);

  const changeSenderActiveStatus = () => {
    dispatch(makeChangeInSenderStatus(!activeStatus));
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <UserInfoComp
        name={senderName}
        avatar={avatar}
        designation={designation}
        active={activeStatus}
        changeStatus={changeSenderActiveStatus}
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

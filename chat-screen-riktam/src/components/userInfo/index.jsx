import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeChangeInSenderStatus,
  senderDataSelector,
} from "../../slices/senderSlice";
import { usersDataSelector } from "../../slices/usersSlice";
import { getListOfUsers } from "../../utils";
import CollapsedList from "./components/CollapsedList";
import UserInfoComp from "./components/UserInfoComp";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { senderName, avatar, designation, activeStatus } =
    useSelector(senderDataSelector);

  const { users } = useSelector(usersDataSelector);

  const activeUserCount = users.filter(
    (user) => user.isActive === true && user.isArchive === false
  ).length;

  const archiveUserCount = users.filter(
    (user) => user.isArchive === true
  ).length;

  const archiveUsers = users.filter((user) => user.isArchive === true);

  const activeUsers = users.filter(
    (user) => user.isArchive === false && user.isActive === true
  );

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
        users={activeUsers}
        listName={"Active Conversations"}
        totalUnreadCount={activeUserCount}
        defaultCollapseState={true}
      />

      <CollapsedList
        users={archiveUsers}
        listName={"Archive Conversations"}
        totalUnreadCount={archiveUserCount}
        defaultCollapseState={false}
      />
    </Grid>
  );
};

export default UserInfo;

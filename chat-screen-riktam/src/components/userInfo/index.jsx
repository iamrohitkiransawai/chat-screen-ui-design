import { faker } from "@faker-js/faker";
import { Grid } from "@mui/material";
import React from "react";
import { getListOfUsers } from "../../utils";
import CollapsedList from "./components/CollapsedList";
import UserInfoComp from "./components/UserInfoComp";

const UserInfo = () => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <UserInfoComp
        name={faker.name.fullName()}
        avatar={faker.image.avatar()}
        designation={faker.name.jobTitle()}
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

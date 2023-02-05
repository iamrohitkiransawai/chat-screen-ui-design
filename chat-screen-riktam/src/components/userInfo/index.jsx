import { faker } from "@faker-js/faker";
import { Grid, Paper } from "@mui/material";
import React from "react";
import { AvatarWithName } from "./components/avatarWithName";

const UserInfo = () => {
  return (
    <Grid item xs={12} sm={3} md={3} lg={3}>
      <Paper>
        <AvatarWithName
          name={faker.name.fullName()}
          avatar={faker.image.avatar()}
        />
      </Paper>
    </Grid>
  );
};

export default UserInfo;

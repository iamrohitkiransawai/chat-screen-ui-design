import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import { UserName } from "../styles";
import { faker } from "@faker-js/faker";

export const AvatarWithName = ({ name, avatar }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        margin: 1,
        padding: 1,
        backgroundColor: "#e1f5fe",
      }}
    >
      <Stack direction={"row"}>
        <Box>
          <Avatar alt={name} src={avatar} />
        </Box>

        <Box sx={{ padding: 1 }}>
          <strong>{name}</strong>
        </Box>
      </Stack>
    </Box>
  );
};

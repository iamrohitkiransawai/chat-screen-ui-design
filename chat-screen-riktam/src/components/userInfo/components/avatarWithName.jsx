import { Avatar, Box, Stack } from "@mui/material";
import React from "react";

export const AvatarWithName = ({ name, avatar }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        margin: 1,
        padding: 1,
        backgroundColor: "#00B8A9",
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

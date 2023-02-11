import { Box, Grid } from "@mui/material";
import React from "react";
import { getSxForUserInfo } from "../../utils";
import NotificationRect from "./components/NotificationRect";
import UserArchiveScreen from "./components/UserArchiveScreen";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";

const AnalysisInfo = () => {
  return (
    <Grid item xs={12} sm={3} md={3} lg={3}>
      <Box sx={getSxForUserInfo("#BBDED6", "#8AC6D1")}>
        <UserArchiveScreen />
      </Box>
      <NotificationRect Icon={WatchLaterTwoToneIcon} />
    </Grid>
  );
};

export default AnalysisInfo;

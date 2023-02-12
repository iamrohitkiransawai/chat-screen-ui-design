import { Box, Grid } from "@mui/material";
import React from "react";
import { getSxForUserInfo } from "../../utils";
import MiddleRightSection from "./components/MiddleRightSection";
import CopyLinkComp from "./components/onboard-client/CopyLinkComp";
import UserArchiveScreen from "./components/UserArchiveScreen";

const AnalysisInfo = () => {
  return (
    <Grid item xs={12} sm={3} md={3} lg={3}>
      <Box sx={getSxForUserInfo("#BBDED6", "#8AC6D1")}>
        <UserArchiveScreen />
      </Box>
      <MiddleRightSection />
      <CopyLinkComp />
    </Grid>
  );
};

export default AnalysisInfo;

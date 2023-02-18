import { Box, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getSxForUserInfo } from "../../utils";
import MiddleRightSection from "./components/MiddleRightSection";
import CopyLinkComp from "./components/onboard-client/CopyLinkComp";
import UserArchiveScreen from "./components/UserArchiveScreen";
import { usersDataSelector } from "../../slices/usersSlice";

const AnalysisInfo = ({ userId }) => {
  const { users, selectedUser } = useSelector(usersDataSelector);
  const selectedUserInfo =
    users.length > 0 && users.find((user) => user.id === selectedUser);
  return (
    selectedUserInfo && (
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <Box sx={getSxForUserInfo("#BBDED6", "#8AC6D1")}>
          <UserArchiveScreen
            name={selectedUserInfo.name}
            emailId={selectedUserInfo.emailId}
          />
        </Box>
        <MiddleRightSection />
        <CopyLinkComp />
      </Grid>
    )
  );
};

export default AnalysisInfo;

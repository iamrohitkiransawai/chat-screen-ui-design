import { Avatar, Box } from "@mui/material";
import React from "react";
import { Designation, UserInfoBox, UserName, UserNameInComp } from "../styles";
import SettingsIcon from "@mui/icons-material/Settings";
import AntDesignSwitch from "./AntDesignSwitch";
import { getSxForUserInfo } from "../../../utils";

const UserInfoComp = ({ name, avatar, designation, active, changeStatus }) => {
  return (
    <Box sx={getSxForUserInfo("#BBDED6", "#8AC6D1")}>
      <UserInfoBox>
        <Avatar sx={{ width: 100, height: 100 }} src={avatar} alt={name} />
        <UserNameInComp>
          <UserName bold fontSize={"20px"}>
            {name}
          </UserName>
          <SettingsIcon />
        </UserNameInComp>
        <Designation fontSize={"14px"}>{designation}</Designation>
        <AntDesignSwitch activeStatus={active} changeStatus={changeStatus} />
      </UserInfoBox>
    </Box>
  );
};

export default UserInfoComp;

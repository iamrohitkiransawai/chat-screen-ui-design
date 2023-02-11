import { Button } from "@mui/material";
import React from "react";
import { UserInfoBox } from "../../userInfo/styles";
import { UserInitialsComp } from "./UserInitialsComp";
import InfoWithIcon from "./InfoWithIcon";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { faker } from "@faker-js/faker";
import { ArchiveBtn } from "../styles";

const UserArchiveScreen = ({ name, avatar, designation }) => {
  return (
    <>
      <UserInfoBox>
        <UserInitialsComp firstLetter={"A"} secondLetter={"B"} />
      </UserInfoBox>
      <InfoWithIcon info={faker.internet.email()} Icon={EmailOutlinedIcon} />
      <InfoWithIcon
        info={faker.name.fullName()}
        Icon={AccountCircleOutlinedIcon}
      />
      <ArchiveBtn>
        <Button variant="outlined" endIcon={<Inventory2OutlinedIcon />}>
          {"Archive"}
        </Button>
      </ArchiveBtn>
    </>
  );
};

export default UserArchiveScreen;

import { Button } from "@mui/material";
import React from "react";
import { UserInfoBox } from "../../userInfo/styles";
import { UserInitialsComp } from "./UserInitialsComp";
import InfoWithIcon from "./InfoWithIcon";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { ArchiveBtn } from "../styles";
import { ARCHIVE, FIRST, SECOND, UNARCHIVE } from "../../../constants";
import { getFirstSecondLetterOfName } from "../../../utils";

const UserArchiveScreen = ({ name, emailId, archiveUser, archiveStatus }) => {
  return (
    <>
      <UserInfoBox>
        <UserInitialsComp
          firstLetter={getFirstSecondLetterOfName(name, FIRST)}
          secondLetter={getFirstSecondLetterOfName(name, SECOND)}
        />
      </UserInfoBox>
      <InfoWithIcon info={emailId} Icon={EmailOutlinedIcon} />
      <InfoWithIcon info={name} Icon={AccountCircleOutlinedIcon} />
      <ArchiveBtn>
        <Button
          onClick={archiveUser}
          variant="outlined"
          endIcon={<Inventory2OutlinedIcon />}
        >
          {!archiveStatus ? ARCHIVE : UNARCHIVE}
        </Button>
      </ArchiveBtn>
    </>
  );
};

export default UserArchiveScreen;

import { Typography } from "@mui/material";
import { InfoIcon, InfoRoot } from "../styles";

const InfoWithIcon = ({ info, Icon }) => (
  <InfoRoot>
    <InfoIcon>
      <Icon />
    </InfoIcon>
    <Typography variant="body2">{info}</Typography>
  </InfoRoot>
);

export default InfoWithIcon;

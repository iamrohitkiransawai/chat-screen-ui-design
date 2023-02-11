import { Typography } from "@mui/material";
import {
  NotificationIcon,
  NotificationInfo,
  NotificationRoot,
} from "../styles";

const NotificationRect = ({ Icon }) => (
  <NotificationRoot>
    <NotificationIcon>
      <Icon />
    </NotificationIcon>
    <NotificationInfo>
      <Typography
        variant="subtitle1"
        style={{ color: "#3f51b5", fontWeight: "bold" }}
      >
        13H
      </Typography>
      <Typography variant="body2">Time</Typography>
    </NotificationInfo>
  </NotificationRoot>
);

export default NotificationRect;

import { Typography } from "@mui/material";
import {
  IconContainer,
  NotificationIcon,
  NotificationInfo,
  NotificationRoot,
} from "../styles";

const NotificationRect = ({
  Icon,
  message,
  purpose,
  fColor,
  bColor,
  bRgba,
}) => (
  <NotificationRoot bColor={bColor}>
    <IconContainer bColor={bRgba}>
      <NotificationIcon>
        <Icon />
      </NotificationIcon>
    </IconContainer>
    <NotificationInfo>
      <Typography
        variant="subtitle1"
        style={{ color: fColor, fontWeight: "bold" }}
      >
        {message}
      </Typography>
      <Typography variant="body2">{purpose}</Typography>
    </NotificationInfo>
  </NotificationRoot>
);

export default NotificationRect;

import { Grid } from "@mui/material";
import NotificationRect from "./NotificationRect";
import { notificationSetting, messageWithPurpose } from "../../../utils";

const NotificationGrid = () => {
  return (
    <Grid container spacing={1} sx={{ marginTop: 0.5 }}>
      {notificationSetting.map((setting, index) => {
        return (
          <Grid key={index} item sm={6}>
            <NotificationRect
              message={messageWithPurpose[setting.purpose]}
              purpose={setting.purpose}
              Icon={setting.Icon}
              fColor={setting.forgroundColor}
              bColor={setting.backgroundColor}
              bRgba={setting.backRgba}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NotificationGrid;

import { getSxForUserInfo } from "../../../utils";
import { Box } from "@mui/system";
import NotificationGrid from "./NotificationGrid";

const MiddleRightSection = () => (
  <Box sx={getSxForUserInfo("#BBDED6", "#8AC6D1")}>
    <NotificationGrid />
  </Box>
);

export default MiddleRightSection;

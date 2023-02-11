import { getSxForUserInfo } from "../../../utils";
import { Box } from "@mui/system";
import NotificationGrid from "./NotificationGrid";
import BarGraph from "./bar-graph-comp/BarGraph";

const MiddleRightSection = () => (
  <Box sx={getSxForUserInfo("#BBDED6", "#8AC6D1")}>
    <NotificationGrid />
    <BarGraph
      heading="Current week"
      subheading="Activity"
      data={[50, 60, 70, 80, 90, 100, 110]}
      color="#e0f3f5"
      hoverColor="#00a3b9"
      barWidth={75}
    />
  </Box>
);

export default MiddleRightSection;

import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { senderDataSelector } from "../../slices/senderSlice";
import ChatWindow from "./components/ChatWindow";
import useWindowDimensions from "./components/useWindowDimensions";

const CopyLinkComp = () => {
  const { activeStatus } = useSelector(senderDataSelector);

  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      <Box
        sx={{
          borderRadius: 4,
          margin: 1.5,
          padding: 1,
          height: useWindowDimensions().height - 20,
          backgroundColor: `#BBDED6`,
          border: `1px solid #8AC6D1`,
        }}
      >
        <ChatWindow senderActiveStatus={activeStatus} />
      </Box>
    </Grid>
  );
};

export default CopyLinkComp;

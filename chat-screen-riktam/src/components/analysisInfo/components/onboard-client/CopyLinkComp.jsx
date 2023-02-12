import { getSxForUserInfo } from "../../../../utils";
import { Box } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";
import LinkTwoToneIcon from "@mui/icons-material/LinkTwoTone";
import { CopyLinkCompStyle, NotificationInfo } from "../../styles";

const CopyLinkComp = () => (
  <Box sx={getSxForUserInfo("#BBDED6", "#8AC6D1")}>
    <CopyLinkCompStyle>
      <Typography variant="h6" sx={{ margin: 1.8, fontWeight: 800 }}>
        Onboard Clients
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ marginBottom: 1.8, color: "#606060" }}
      >
        Share the link with prospects and discuss all stuff
      </Typography>

      <Button
        size="large"
        variant="contained"
        endIcon={<LinkTwoToneIcon />}
        sx={{
          marginLeft: 4,
          marginRight: 4,
          marginBottom: 1.8,
          marginTop: 0.4,
        }}
      >
        Copy Link
      </Button>
    </CopyLinkCompStyle>
  </Box>
);

export default CopyLinkComp;

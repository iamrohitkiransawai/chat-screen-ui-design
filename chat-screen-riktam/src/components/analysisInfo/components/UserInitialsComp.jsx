import { Box } from "@mui/material";
import { getUserInitials } from "../../../utils";
import { Letter } from "../styles";

export const UserInitialsComp = ({ firstLetter, secondLetter }) => (
  <Box sx={getUserInitials()}>
    <Letter style={{ left: "40%" }}>{firstLetter}</Letter>
    <Letter style={{ left: "60%" }}>{secondLetter}</Letter>
  </Box>
);

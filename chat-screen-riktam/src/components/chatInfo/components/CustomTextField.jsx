import { Box, Grid, InputAdornment } from "@mui/material";
import { ButtonContainer, Container, TextFieldContainer } from "../styles";
import InsertLinkTwoToneIcon from "@mui/icons-material/InsertLinkTwoTone";
import TagFacesTwoToneIcon from "@mui/icons-material/TagFacesTwoTone";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const CustomTextField = ({
  textValue,
  textChange,
  keyDownEventText,
  btnClick,
}) => {
  const handleFileUpload = () => {
    console.log("File upload");
  };

  const handleEmojiSelect = () => {
    console.log("Emoji selected");
  };

  const handleSendMessage = () => {
    console.log("Message sent");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 2,
          borderRadius: 4,
          bottom: 0,
          backgroundColor: "#fff",
          boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid item xs={10} sm={10} md={10} lg={10} sx={{ margin: 1 }}>
          <TextFieldContainer
            variant="outlined"
            fullWidth
            placeholder="Type a message..."
            value={textValue}
            onChange={(event) => textChange(event.target.value)}
            onKeyDown={keyDownEventText}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InsertLinkTwoToneIcon onClick={handleFileUpload} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <TagFacesTwoToneIcon onClick={handleEmojiSelect} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <ButtonContainer
            variant="contained"
            color="primary"
            endIcon={<SendRoundedIcon />}
            onClick={btnClick}
          >
            Send
          </ButtonContainer>
        </Grid>
      </Box>
    </>
  );
};

export default CustomTextField;

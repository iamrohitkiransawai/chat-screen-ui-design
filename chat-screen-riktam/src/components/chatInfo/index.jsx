import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { conversationSelector } from "../../slices/conversationSlice";
import { senderDataSelector } from "../../slices/senderSlice";
import { usersDataSelector } from "../../slices/usersSlice";
import ChatWindow from "./components/ChatWindow";
import useWindowDimensions from "./components/useWindowDimensions";

const CopyLinkComp = () => {
  const { activeStatus, avatar } = useSelector(senderDataSelector);
  const { selectedUser } = useSelector(usersDataSelector);
  const { chats } = useSelector(conversationSelector);
  const messages =
    chats.length > 0 &&
    chats.filter(
      (chat) => chat.to === selectedUser.id || chat.from === selectedUser.id
    );

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
        {messages && (
          <ChatWindow
            senderActiveStatus={activeStatus}
            chats={messages}
            senderAvatar={avatar}
            receiverAvatar={selectedUser.avatar}
          />
        )}
      </Box>
    </Grid>
  );
};

export default CopyLinkComp;

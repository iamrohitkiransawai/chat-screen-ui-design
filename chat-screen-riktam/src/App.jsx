import React, { useEffect, useState } from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import "./App.css";
import AnalysisInfo from "./components/analysisInfo";
import ChatInfo from "./components/chatInfo";
import UserInfo from "./components/userInfo";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import { addSenderToStore } from "./slices/senderSlice";
import { addUserToStore } from "./slices/usersSlice";
import { setSelectedUserState } from "./slices/usersSlice";
import { addChatToStore } from "./slices/conversationSlice";

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  let senderNameState = "";
  const dispatch = useDispatch();

  const addInitialChatToStore = (user) => {
    let chat = {
      id: 1000 + user.id,
      fromId: user.id,
      toId: 0,
      message: `Hi, ${senderNameState}. How are you???`,
      time: Date.now(),
    };

    dispatch(addChatToStore(chat));

    chat = {
      id: 2000 + user.id,
      fromId: 0,
      toId: user.id,
      message: `I'm good ${user.name}`,
      time: Date.now(),
    };

    dispatch(addChatToStore(chat));
  };

  const addUsersData = () => {
    for (let i = 0; i < 5; i++) {
      let user = {
        id: i + 1,
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        emailId: faker.internet.email(),
        isActive: true,
        isArchive: false,
        unreadMessageCount: 0,
      };

      i === 0 && dispatch(setSelectedUserState(user));
      addInitialChatToStore(user);
      dispatch(addUserToStore(user));
    }
  };

  const addSenderData = () => {
    let senderName = "";
    let designation = "";
    let activeStatus = "";
    let avatar = "";
    try {
      senderName = faker.name.fullName();
      designation = faker.name.jobTitle();
      activeStatus = false;
      avatar = faker.image.avatar();

      senderNameState = senderName;

      dispatch(
        addSenderToStore({ senderName, designation, activeStatus, avatar })
      );
    } catch (error) {
      console.table({ senderName, designation, activeStatus, avatar });
    }
  };

  useEffect(() => {
    if (!isDataLoaded) {
      addSenderData();
      addUsersData();
      setIsDataLoaded((prevState) => !prevState);
    }
  }, [isDataLoaded]);

  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <Grid container rowSpacing={3} columnSpacing={4}>
        <UserInfo />
        <ChatInfo />
        <AnalysisInfo />
      </Grid>
    </Container>
  );
};

export default App;

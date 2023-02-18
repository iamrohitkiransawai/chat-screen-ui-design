import React, { useEffect, useRef, useState } from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import "./App.css";
import AnalysisInfo from "./components/analysisInfo";
import ChatInfo from "./components/chatInfo";
import UserInfo from "./components/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { addSenderToStore } from "./slices/senderSlice";
import { addUserToStore } from "./slices/usersSlice";

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const dispatch = useDispatch();
  const isInitialRender = useRef(true);

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

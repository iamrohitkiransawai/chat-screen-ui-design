import React, { useEffect } from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import "./App.css";
import AnalysisInfo from "./components/analysisInfo";
import ChatInfo from "./components/chatInfo";
import UserInfo from "./components/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { addSenderToStore } from "./slices/senderSlice";

const App = () => {
  const dispatch = useDispatch();

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
      console.log(":: ~ file: App.jsx:25 ~ useEffect ~ error", error);
      console.table({ senderName, designation, activeStatus, avatar });
    }
  };

  useEffect(() => {
    addSenderData();
  }, []);

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

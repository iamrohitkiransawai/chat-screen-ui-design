import React from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import "./App.css";
import AnalysisInfo from "./components/analysisInfo";
import ChatInfo from "./components/chatInfo";
import UserInfo from "./components/userInfo";

function App() {
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
}

export default App;

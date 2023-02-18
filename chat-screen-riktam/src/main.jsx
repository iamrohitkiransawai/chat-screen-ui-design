import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import rootReducer from "../src/slices/index";
import { Provider } from "react-redux";
import App from "./App";

const store = configureStore({ reducer: rootReducer });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

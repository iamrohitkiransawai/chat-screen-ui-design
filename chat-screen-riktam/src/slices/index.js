import { combineReducers } from "@reduxjs/toolkit";
import MessageReducer from "./messageSlice";
import SenderReducer from "./senderSlice";

const rootReducer = combineReducers({
  messages: MessageReducer,
  senderData: SenderReducer,
});

export default rootReducer;

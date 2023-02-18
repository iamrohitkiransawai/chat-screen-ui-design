import { combineReducers } from "@reduxjs/toolkit";
import MessageReducer from "./messageSlice";
import SenderReducer from "./senderSlice";
import UsersReducer from "./usersSlice";

const rootReducer = combineReducers({
  messages: MessageReducer,
  senderData: SenderReducer,
  usersData: UsersReducer,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import MessageReducer from "./messageSlice";
import SenderReducer from "./senderSlice";
import UsersReducer from "./usersSlice";
import ConversationReducer from "./conversationSlice";

const rootReducer = combineReducers({
  messages: MessageReducer,
  senderData: SenderReducer,
  usersData: UsersReducer,
  conversationData: ConversationReducer,
});

export default rootReducer;

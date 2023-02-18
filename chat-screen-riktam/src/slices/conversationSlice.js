import { createSlice } from "@reduxjs/toolkit";
import { RECEIVER, SENDER } from "../constants";

const initialState = {
  chats: [
    // {
    //   from: null,
    //   to: null,
    //   message: "",
    //   time: undefined,
    // },
  ],
};

const conversationSlice = createSlice({
  name: "conversationData",
  initialState,
  reducers: {
    addChatMessage: (state, { payload }) => {
      let chatObj = {
        id: payload.id,
        type: payload.fromId === 0 ? SENDER : RECEIVER,
        from: payload.fromId,
        to: payload.toId,
        message: payload.message,
        time: payload.time,
      };
      state.chats.push(chatObj);
    },
  },
});

export const { addChatMessage } = conversationSlice.actions;
export const conversationSelector = (state) => state.conversationData;
export default conversationSlice.reducer;

export const addChatToStore = (data) => async (dispatch) => {
  dispatch(addChatMessage(data));
};

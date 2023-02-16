import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    addMessage: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { addMessage } = messageSlice.actions;
export const messageSelector = (state) => state.messages;
export default messageSlice.reducer;

export const addMessageToStore = () => async (dispatch, data) => {
  dispatch(addMessage(data));
};

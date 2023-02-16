import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  senderName: "",
  designation: "",
  activeStatus: false,
  avatar: "",
};

const senderSlice = createSlice({
  name: "senderData",
  initialState,
  reducers: {
    addSender: (state, { payload }) => {
      state.senderName = payload.senderName;
      state.designation = payload.designation;
      state.activeStatus = payload.activeStatus;
      state.avatar = payload.avatar;
    },
    changeSenderActiveStatus: (state, { payload }) => {
      state.activeStatus = payload;
    },
    changeSenderName: (state, { payload }) => {
      state.senderName = payload;
    },
    changeDesignation: (state, { payload }) => {
      state.designation = payload;
    },
  },
});

export const {
  addSender,
  changeSenderActiveStatus,
  changeSenderName,
  changeDesignation,
} = senderSlice.actions;

export const senderDataSelector = (state) => state.senderData;

export default senderSlice.reducer;

export const addSenderToStore = (data) => async (dispatch) => {
  dispatch(addSender(data));
};

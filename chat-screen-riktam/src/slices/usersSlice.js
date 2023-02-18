import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      console.log(payload);
      state.users.push(payload);
    },
    // changeSenderActiveStatus: (state, { payload }) => {
    //   state.activeStatus = payload;
    // },
    // changeSenderName: (state, { payload }) => {
    //   state.senderName = payload;
    // },
    // changeDesignation: (state, { payload }) => {
    //   state.designation = payload;
    // },
  },
});

export const {
  addUser,
  //   changeSenderActiveStatus,
  //   changeSenderName,
  //   changeDesignation,
} = usersSlice.actions;

export const usersDataSelector = (state) => state.usersData;

export default usersSlice.reducer;

export const addUserToStore = (data) => async (dispatch) => {
  dispatch(addUser(data));
};

// export const makeChangeInSenderStatus = (status) => async (dispatch) => {
//   dispatch(changeSenderActiveStatus(status));
// };

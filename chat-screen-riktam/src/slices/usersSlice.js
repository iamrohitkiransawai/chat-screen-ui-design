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
  },
});

export const { addUser } = usersSlice.actions;

export const usersDataSelector = (state) => state.usersData;

export default usersSlice.reducer;

export const addUserToStore = (data) => async (dispatch) => {
  dispatch(addUser(data));
};

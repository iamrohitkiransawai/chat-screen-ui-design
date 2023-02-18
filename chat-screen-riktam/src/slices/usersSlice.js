import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedUser: null,
  users: [
    // {
    //   id: null,
    //   name: "",
    //   avatar: "",
    //   emailId: "",
    //   isActive: true,
    //   isArchive: false,
    //   unreadMessageCount: 0,
    // },
  ],
};

const usersSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    setSelectedUser: (state, { payload }) => {
      state.selectedUser = { ...payload };
    },
  },
});

export const { addUser, setSelectedUser } = usersSlice.actions;

export const usersDataSelector = (state) => state.usersData;

export default usersSlice.reducer;

export const addUserToStore = (data) => async (dispatch) => {
  dispatch(addUser(data));
};

export const setSelectedUserState = (data) => async (dispatch) => {
  dispatch(setSelectedUser(data));
};

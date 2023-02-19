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
    setUserArchiveStatus: (state) => {
      state.selectedUser.isArchive = true;
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === state.selectedUser.id) {
          state.users[i].isArchive = !state.users[i].isArchive;
        }
      }
    },
  },
});

export const { addUser, setSelectedUser, setUserArchiveStatus } =
  usersSlice.actions;

export const usersDataSelector = (state) => state.usersData;

export default usersSlice.reducer;

export const addUserToStore = (data) => async (dispatch) => {
  dispatch(addUser(data));
};

export const setSelectedUserState = (data) => async (dispatch) => {
  dispatch(setSelectedUser(data));
};

export const setArchiveUserConv = () => async (dispatch, getState) => {
  await dispatch(setUserArchiveStatus());
  dispatch(changeSelectedUserAfterArchive());
};

const changeSelectedUserAfterArchive = () => async (dispatch, getState) => {
  const { users } = getState().usersData;
  const activeUsers = users.filter(
    (user) => user.isActive === true && user.isArchive === false
  );
  activeUsers.length > 0 && dispatch(setSelectedUser(activeUsers[0]));
};

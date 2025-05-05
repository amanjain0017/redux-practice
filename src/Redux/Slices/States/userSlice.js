import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isActive: false, users: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMainUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.users.push(action.payload);
    },
    setIsActive: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { setMainUser, setUsers, setIsActive } = userSlice.actions;
export default userSlice.reducer;

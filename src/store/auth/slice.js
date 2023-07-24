import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    roleId: '',
    userId: '',
    name: '',
  },
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return {
        token: '',
        roleId: '',
        userId: '',
        name: '',
      };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

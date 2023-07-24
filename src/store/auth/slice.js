import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    credentials: {
      token: '',
      roleId: '',
      userId: '',
      name: '',
    },
  },
  reducers: {
    login: (state, action) => {
      let { payload } = action;
      state.credentials.token = payload.token;
      state.credentials.roleId = payload.user.role_id;
      state.credentials.userId = payload.user.id;
      state.credentials.name = payload.user.name;
    },
    logout: (state) => {
      return {
        ...state,
        credentials: {
          token: '',
          roleId: '',
          userId: '',
          name: '',
        },
      };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    credentials: {
      token: '',
      roleId: '',
    },
    data: {
      userId: '',
      name: '',
    },
  },
  reducers: {
    login: (state, action) => {
      let { payload } = action;
      state.credentials.token = payload.token;
      state.credentials.roleId = payload.user.role_id;
      state.data.userId = payload.user.id;
      state.data.name = payload.user.name;
    },
    logout: (state) => {
      return {
        ...state,
        credentials: {
          token: '',
          roleId: '',
        },
        data: {
          userId: '',
          name: '',
        },
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userData = (state) => state.user.data;

export default userSlice.reducer;

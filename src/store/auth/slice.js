import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  roleId: '',
  userId: '',
  name: '',
  imageKey: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return initialState;
    },
    update: (state, action) => {
      return {
        ...action.payload,
        token: state.token,
        roleId: state.roleId,
        userId: state.userId,
      };
    },
  },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;

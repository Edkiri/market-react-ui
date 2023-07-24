import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    changeTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;

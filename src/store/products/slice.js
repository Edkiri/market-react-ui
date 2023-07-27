import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    usersSuccess: (state, action) => {
      return action.payload;
  },
  },
});

export const { usersSuccess } = productsSlice.actions;

export default productsSlice.reducer;

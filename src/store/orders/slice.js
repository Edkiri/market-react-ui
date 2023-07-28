import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    ordersSuccess: (state, action) => {
      return action.payload;
    },
  },
});

export const { ordersSuccess } = ordersSlice.actions;

export default ordersSlice.reducer;

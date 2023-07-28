import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      const productId = action.payload.id;
      const orderIndex = state.findIndex((order) => order.id === productId);
      if (orderIndex > -1) {
        state[orderIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOrder: (state, action) => {
      const productId = action.payload.id;
      const order = state.find((order) => order.id === productId);
      if (order.quantity === 1) {
        return state.filter((item) => item.id !== productId);
      } else {
        order.quantity -= 1;
      }
    },
  },
});

export const { addOrder, removeOrder } = cartSlice.actions;

export default cartSlice.reducer;

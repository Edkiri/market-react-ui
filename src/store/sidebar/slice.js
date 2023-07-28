import { createSlice } from '@reduxjs/toolkit';


export const sidebarItems = {
  HOME: 'home',
  PRODUCTS: 'products',
  CART: 'cart',
  ORDERS: 'orders'
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    selectedItem: sidebarItems.HOME,
  },
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { selectItem } = sidebarSlice.actions;

export default sidebarSlice.reducer;

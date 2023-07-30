import { createSlice } from '@reduxjs/toolkit';


export const sidebarItems = {
  HOME: 'home',
  PRODUCTS: 'products',
  CART: 'cart',
  ORDERS: 'orders',
  PROFILE: 'my-profile',
  LOGOUT: 'logout',
  ALL_ORDERS: 'all-orders'
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    selectedItem: sidebarItems.HOME,
    toggled: false,
  },
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    updateToggled: (state, action) => {
      state.toggled = action.payload;
    }
  },
});

export const { selectItem, updateToggled } = sidebarSlice.actions;

export default sidebarSlice.reducer;

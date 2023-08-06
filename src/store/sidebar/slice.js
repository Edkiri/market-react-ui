import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    selectedItem: '/',
    toggled: false,
  },
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    updateToggled: (state, action) => {
      state.toggled = action.payload;
    },
  },
});

export const { selectItem, updateToggled } = sidebarSlice.actions;

export default sidebarSlice.reducer;

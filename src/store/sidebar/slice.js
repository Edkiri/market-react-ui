import { sidebarItems } from '@/utils/constants';
import { createSlice } from '@reduxjs/toolkit';

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

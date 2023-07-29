import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categories: [],
    selectedCategory: 'más vendidos',
  },
  reducers: {
    usersSuccess: (state, action) => {
      state.products = action.payload;
    },
    categoriesSuccess: (state, action) => {
      state.categories = [
        { name: 'más vendidos' },
        ...action.payload.categories,
      ];
    },
    updateSelectedCategoty: (state, action) => {
      state.selectedCategory = action.payload.category;
    },
  },
});

export const { usersSuccess, categoriesSuccess, updateSelectedCategoty } =
  productsSlice.actions;

export default productsSlice.reducer;

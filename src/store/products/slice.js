import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categories: [],
    selectedCategory: 'todas',
  },
  reducers: {
    productsSuccess: (state, action) => {
      state.products = action.payload;
    },
    categoriesSuccess: (state, action) => {
      state.categories = [
        { name: 'todas' },
        ...action.payload.categories,
      ];
    },
    updateSelectedCategoty: (state, action) => {
      state.selectedCategory = action.payload.category;
    },
  },
});

export const { productsSuccess, categoriesSuccess, updateSelectedCategoty } =
  productsSlice.actions;

export default productsSlice.reducer;

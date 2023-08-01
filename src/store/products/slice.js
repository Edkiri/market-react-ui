import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  categories: [],
  selectedCategory: 'todas',
  paginate: {
    current: 1,
    lastPage: 1,
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    productsSuccess: (state, action) => {
      state.products = action.payload.products;
      state.paginate.lastPage = action.payload.lastPage;
    },
    categoriesSuccess: (state, action) => {
      state.categories = [{ name: 'todas' }, ...action.payload.categories];
    },
    updateSelectedCategoty: (state, action) => {
      state.selectedCategory = action.payload.category;
    },
    changePage: (state, action) => {
      state.paginate.current = action.payload.page;
    },
  },
});

export const {
  productsSuccess,
  categoriesSuccess,
  updateSelectedCategoty,
  changePage,
} = productsSlice.actions;

export default productsSlice.reducer;

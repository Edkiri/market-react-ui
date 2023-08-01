import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  categories: [],
  filters: {
    page: 1,
    name: '',
    category_id: '',
  },
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
      state.filters.category_id = action.payload.categoryId;
    },
    changePage: (state, action) => {
      state.filters.page = action.payload.page;
      state.paginate.current = action.payload.page;
    },
    changeName: (state, action) => {
      state.paginate.current = action.payload.name;
    },
  },
});

export const {
  productsSuccess,
  categoriesSuccess,
  updateSelectedCategoty,
  changePage,
  changeName,
} = productsSlice.actions;

export default productsSlice.reducer;

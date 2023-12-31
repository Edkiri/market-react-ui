import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';

import { userSlice } from './auth/slice';
import { themeSlice } from './theme/slice';
import { productsSlice } from './products/slice';
import { cartSlice } from './cart/slice';
import { sidebarSlice } from './sidebar/slice';
import { ordersSlice } from './orders/slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  theme: themeSlice.reducer,
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
  sidebar: sidebarSlice.reducer,
  orders: ordersSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

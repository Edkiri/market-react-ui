import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import UserProfile from './pages/UserProfile';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import AuthRoute from './guards/AuthRoute';
import PaymentPage from './pages/PaymentPage';
import AdminRoute from './guards/AdminRoute';
import AdminOrdersPage from './pages/AdminOrdersPage';
import CreateProduct from './pages/CreateProduct';

export const views = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
  MY_PROFILE: '/my-profile',
  CART: '/cart',
  ORDERS: '/orders',
  PAYMENT: '/payment',
  ALL_ORDERS: '/all-orders',
  CREATE_PRODUCT: '/create-product',
};

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path={views.HOME} element={<Home />} />
        <Route path={views.LOGIN} element={<Login />} />
        <Route path={views.SIGNUP} element={<Signup />} />
        <Route path={views.MY_PROFILE} element={<UserProfile />} />
        // List of cart items
        <Route path={views.CART} element={<CartPage />} />
        <Route
          path={views.ORDERS}
          element={<AuthRoute children={<OrdersPage />} />}
        />
        // Protected Payment Page
        <Route
          path={views.PAYMENT}
          element={<AuthRoute children={<PaymentPage />} />}
        />
        <Route
          path={views.ALL_ORDERS}
          element={<AdminRoute children={<AdminOrdersPage />} />}
        />
        <Route
          path={views.CREATE_PRODUCT}
          element={<AdminRoute children={<CreateProduct />} />}
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

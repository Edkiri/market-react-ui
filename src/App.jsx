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

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-profile" element={<UserProfile />} />
        // List of cart items
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/orders"
          element={<AuthRoute children={<OrdersPage />} />}
        />
        // Protected Payment Page
        <Route
          path="/payment"
          element={<AuthRoute children={<PaymentPage />} />}
        />
        <Route
          path="/all-orders"
          element={<AdminRoute children={<AdminOrdersPage />} />}
        />
        <Route
          path="/create-product"
          element={<AdminRoute children={<CreateProduct />} />}
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

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
        // Protected Orders Page
        <Route
          path="/payment"
          element={<AuthRoute children={<PaymentPage />} />}
        />
        <Route
          path="/orders"
          element={<AuthRoute children={<OrdersPage />} />}
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

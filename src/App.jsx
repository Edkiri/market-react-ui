import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-profile" element={<UserProfile />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

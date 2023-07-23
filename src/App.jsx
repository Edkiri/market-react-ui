import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';
import Signup from '@/pages/Signup';

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

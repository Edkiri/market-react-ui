import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegMoon } from 'react-icons/fa';

import useTheme from './useTheme';
import HeaderProfile from './components/HeaderProfile';

export default function Header() {
  const { handleChangeTheme } = useTheme();
  const token = useSelector((state) => state.user.credentials.token);

  return (
    <header className="py-3 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-3xl font-bold underline">Royal Market</h1>
      </Link>
      <div className="right flex items-center gap-10">
        {token ? (
          <HeaderProfile />
        ) : (
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="font-semibold leading-6 text-lg text-gray-900 dark:text-white"
            >
              Inicia sesión <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
        <button
          onClick={handleChangeTheme}
          className="text-white bg-black p-3 rounded-full dark:text-black dark:bg-white"
        >
          <FaRegMoon className="fill-black-900 dark:white text-lg" />
        </button>
      </div>
    </header>
  );
}

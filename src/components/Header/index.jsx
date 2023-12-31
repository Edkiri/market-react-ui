import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegMoon } from 'react-icons/fa';

import useTheme from './hooks/useTheme';

export default function Header() {
  const { handleChangeTheme } = useTheme();
  const token = useSelector((state) => state.user.token);

  return (
    <header className="py-3 flex items-center justify-between border-b border-neutral-800 bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-500 px-4">
      <Link to="/">
        <h1 className="text-3xl font-bold underline">Reactive market</h1>
      </Link>
      <div className="right flex items-center gap-10">
        {!token && (
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

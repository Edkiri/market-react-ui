import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useTheme from './useTheme';

export default function Header() {
  const { theme, handleThemeSwitch } = useTheme();
  const token = useSelector((state) => state.user.credentials.token);

  return (
    <header className="py-3 px-2 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-3xl font-bold underline">Royal Market</h1>
      </Link>
      <div className="right flex items-center gap-6">
        <button
          onClick={handleThemeSwitch}
          className="bg-black text-white py-1 px-2 rounded-xl dark:text-black dark:bg-white"
        >
          {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        </button>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          {!token && (
            <Link
              to="/login"
              className="font-semibold leading-6 text-lg text-gray-900 dark:text-white"
            >
              Inicia sesión <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

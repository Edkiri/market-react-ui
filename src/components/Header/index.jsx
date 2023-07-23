import useTheme from './useTheme';

export default function Header() {
  const { theme, handleThemeSwitch } = useTheme();

  return (
    <header className="py-3 px-2 flex items-center justify-between">
      <h1 className="text-3xl font-bold underline">Royal Market</h1>
      <button
        onClick={handleThemeSwitch}
        className="bg-black text-white py-1 px-2 rounded-xl dark:text-black dark:bg-white"
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

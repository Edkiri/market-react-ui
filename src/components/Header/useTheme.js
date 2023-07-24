import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '@/store/theme/slice';

export default function useTheme() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(changeTheme(newTheme));
  };

  return { handleChangeTheme };
}

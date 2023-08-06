import { selectItem } from '@/store/sidebar/slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function useAppNavigate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (path) => {
    navigate(path);
    dispatch(selectItem(path));
  };

  return handleNavigate;
}

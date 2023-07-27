import useScreenWidth from '@/hooks/useScreenWidth';
import { selectItem } from '@/store/sidebar/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SidebarItem({ link, label, icon, hideSidebar, type }) {
  const { selectedItem } = useSelector((state) => state.sidebar);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { screenWidth } = useScreenWidth();

  const hanldleNavigate = () => {
    if (screenWidth < 640) {
      hideSidebar();
    }
    dispatch(selectItem(type));
    navigate(link);
  };

  const selected = selectedItem === type;

  return (
    <li>
      <button
        className={`w-full text-lg tracking-wider py-2 px-3 bg-none rounded-sm text-left hover:bg-neutral-200 hover:dark:bg-neutral-800 flex items-center gap-3 
        ${selected && 'bg-neutral-800'}`}
        onClick={hanldleNavigate}
      >
        {icon}
        {label}
      </button>
    </li>
  );
}

import useScreenWidth from '@/hooks/useScreenWidth';
import { useNavigate } from 'react-router-dom';

export default function SidebarItem({ link, label, icon, hideSidebar }) {
  const navigate = useNavigate();
  const { screenWidth } = useScreenWidth();

  const hanldleNavigate = () => {
    if (screenWidth < 640) {
      hideSidebar();
    }
    navigate(link);
  };

  return (
    <li>
      <button
        className="w-full text-md p-2 bg-none rounded-sm text-left  hover:bg-neutral-200 hover:dark:bg-neutral-800 flex items-center gap-2"
        onClick={hanldleNavigate}
      >
        {icon}
        {label}
      </button>
    </li>
  );
}

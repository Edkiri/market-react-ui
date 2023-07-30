import useScreenWidth from '@/hooks/useScreenWidth';
import { selectItem, updateToggled } from '@/store/sidebar/slice';
import { BsFillPersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SidebarItem({
  link,
  label,
  icon,
  type,
  number,
  image,
  handleClick,
}) {
  const { selectedItem } = useSelector((state) => state.sidebar);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { screenWidth } = useScreenWidth();

  const hanldleNavigate = () => {
    if (screenWidth < 640) {
      dispatch(updateToggled(false));
    }
    dispatch(selectItem(type));
    navigate(link);
    if (handleClick) {
      handleClick();
    }
  };

  const selected = selectedItem === type;

  if (!icon && !image) {
    icon = <BsFillPersonFill />;
  }

  return (
    <li className="w-full">
      <button
        className={`w-full text-lg tracking-wider py-2 px-3 justify-between bg-none rounded-sm  hover:bg-neutral-200 hover:dark:bg-neutral-800 flex items-center gap-3 
        ${selected && 'bg-neutral-200 dark:bg-neutral-800'}`}
        onClick={hanldleNavigate}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 items-center">
            {icon && icon}
            {image && (
              <img
                className="w-5 h-5 bg-cover rounded-full"
                src={image}
                alt={`Profile image`}
              />
            )}
            {label}
          </div>
          {number > 0 && (
            <span className="text-xs w-7 h-7 flex items-center justify-center rounded-full px-3 font-bold text-black dark:text-white">
              {number || ''}
            </span>
          )}
        </div>
      </button>
    </li>
  );
}

import SidebarItem from './components/SidebarItem';
import { FaAppleWhole, FaCartShopping } from 'react-icons/fa6';
import { BsList, BsFillBagFill } from 'react-icons/bs';
import { useState } from 'react';
import { sidebarItems, updateToggled } from '@/store/sidebar/slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Sidebar() {
  const toggled = useSelector(state => state.sidebar.toggled);
  const dispatch = useDispatch();
  // const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggle = () => {
    dispatch(updateToggled(!toggled));
  };

  return (
    <ul
      className={`p-2 md:p-4 min-w-min bottom-0 left-0 top-0 right-0 sm:static flex flex-col gap-1 border-r border-neutral-800 dark:border-neutral-500 ${
        toggled && 'absolute min-w-[240px]  bg-white dark:bg-black'
      }`}
    >
      <header className="mb-4">
        <button onClick={handleToggle} className="">
          <BsList className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </header>
      {toggled && (
        <>
          <SidebarItem
            hideSidebar={() => dispatch(updateToggled(false))}
            link="/"
            label="Productos"
            type={sidebarItems.HOME}
            icon={<FaAppleWhole />}
          />
          <SidebarItem
            hideSidebar={() => dispatch(updateToggled(false))}
            link="/cart"
            label="Carrito"
            type={sidebarItems.ORDERS}
            icon={<FaCartShopping />}
          />
          <SidebarItem
            hideSidebar={() => dispatch(updateToggled(false))}
            link="/orders"
            label="Pedidos"
            type={sidebarItems.CART}
            icon={<BsFillBagFill />}
          />
        </>
      )}
    </ul>
  );
}

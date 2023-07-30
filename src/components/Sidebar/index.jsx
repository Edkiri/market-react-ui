import SidebarItem from './components/SidebarItem';
import { FaAppleWhole, FaCartShopping } from 'react-icons/fa6';
import { BsList } from 'react-icons/bs';
import { sidebarItems, updateToggled } from '@/store/sidebar/slice';
import { useDispatch, useSelector } from 'react-redux';
import SidebarUser from './components/SidebarUser';
import SidebarAdmin from './components/SidebarAdmin';

export default function Sidebar() {
  const toggled = useSelector((state) => state.sidebar.toggled);
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.user.token);
  const roleId = useSelector((state) => state.user.roleId);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateToggled(!toggled));
  };

  const cartTotal = cart.reduce((val, item) => {
    return val + item.quantity;
  }, 0);

  return (
    <div
      className={`p-2 md:p-4 gap-4 z-10 bg-white dark:bg-black bottom-0 left-0 top-0 right-0 sm:static flex flex-col border-r border-neutral-800 dark:border-neutral-500 ${
        toggled && 'absolute min-w-[320px]'
      }`}
    >
      <header>
        <button onClick={handleToggle} className="">
          <BsList className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </header>
      {toggled && token && roleId === 1 && <SidebarAdmin />}
      <ul className="flex flex-col gap-1">
        {toggled && (
          <>
            <h1 className="font-semibold p-2">Tienda</h1>
            <SidebarItem
              link="/"
              label="Productos"
              type={sidebarItems.HOME}
              icon={<FaAppleWhole />}
            />
            <SidebarItem
              link="/cart"
              label="Carrito"
              type={sidebarItems.CART}
              icon={<FaCartShopping />}
              number={cartTotal}
            />
          </>
        )}
      </ul>
      {toggled && token && <SidebarUser />}
    </div>
  );
}

import SidebarItem from './components/SidebarItem';
import { FaAppleWhole, FaCartShopping } from 'react-icons/fa6';
import { BsList, BsFillBagFill } from 'react-icons/bs';
import { sidebarItems, updateToggled } from '@/store/sidebar/slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Sidebar() {
  const toggled = useSelector((state) => state.sidebar.toggled);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateToggled(!toggled));
  };

  const cartTotal = cart.reduce((val, item) => {
    return val + item.quantity;
  }, 0);

  return (
    <div
      className={`p-2 md:p-4 min-w-min bg-white dark:bg-black bottom-0 left-0 top-0 right-0 sm:static flex flex-col gap-1 border-r border-neutral-800 dark:border-neutral-500 ${
        toggled && 'absolute min-w-[300px]'
      }`}
    >
      <header className="mb-4">
        <button onClick={handleToggle} className="">
          <BsList className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </header>
      <ul className="flex flex-col gap-1">
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
              type={sidebarItems.CART}
              icon={<FaCartShopping />}
              number={cartTotal}
            />
            <SidebarItem
              hideSidebar={() => dispatch(updateToggled(false))}
              link="/orders"
              label="Pedidos"
              type={sidebarItems.ORDERS}
              icon={<BsFillBagFill />}
            />
          </>
        )}
      </ul>
    </div>
  );
}

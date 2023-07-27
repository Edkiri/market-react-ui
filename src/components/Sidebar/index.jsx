import SidebarItem from './components/SidebarItem';
import { FaAppleWhole } from 'react-icons/fa6';
import { FaCartShopping } from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <ul className="w-52 p-4 flex flex-col gap-3 border-r border-neutral-800 min-h-full">
      <SidebarItem link="/" label="Productos" icon={<FaAppleWhole />} />
      <SidebarItem link="/cart" label="Carrito" icon={<FaCartShopping />} />
    </ul>
  );
}

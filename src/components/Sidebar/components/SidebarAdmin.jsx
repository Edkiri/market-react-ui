import { BsReceipt } from 'react-icons/bs';
import SidebarItem from './SidebarItem';
import { sidebarItems } from '@/store/sidebar/slice';

export default function SidebarAdmin() {
  return (
    <ul className="flex flex-col mt-4">
      <h1 className="font-semibold p-2">Admin</h1>
      <SidebarItem
        link="/all-orders"
        label="Panel de pedidos"
        type={sidebarItems.ALL_ORDERS}
        icon={<BsReceipt />}
      />
    </ul>
  );
}

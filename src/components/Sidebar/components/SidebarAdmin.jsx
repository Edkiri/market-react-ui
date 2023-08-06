import { BsPlusLg, BsReceipt } from 'react-icons/bs';
import SidebarItem from './SidebarItem';
import { views } from '@/App';

export default function SidebarAdmin() {
  return (
    <ul className="flex flex-col mt-4">
      <h1 className="font-semibold p-2">Admin</h1>
      <SidebarItem
        label="Panel de pedidos"
        view={views.ALL_ORDERS}
        icon={<BsReceipt />}
      />
      <SidebarItem
        label="Crear producto"
        view={views.CREATE_PRODUCT}
        icon={<BsPlusLg />}
      />
    </ul>
  );
}

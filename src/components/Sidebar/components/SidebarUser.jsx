import { useDispatch, useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import { selectItem, sidebarItems, updateToggled } from '@/store/sidebar/slice';
import useCacheImage from '@/hooks/useCacheImage';
import { BsArrowBarLeft, BsFillBagFill } from 'react-icons/bs';
import { logout } from '@/store/auth/slice';
import { clearCart } from '@/store/cart/slice';

export default function SidebarUser() {
  const dispatch = useDispatch();

  const { imageKey } = useSelector((state) => state.user);
  const { imageSrc: profilePic } = useCacheImage({ key: imageKey });

  const handleLogout = () => {
    dispatch(updateToggled(false));
    dispatch(logout());
    dispatch(clearCart());
    dispatch(selectItem(sidebarItems.HOME));
  };

  return (
    <ul className="flex flex-col">
      <h1 className="font-semibold p-2">Perfil</h1>
      <SidebarItem
        link="/orders"
        label="Pedidos"
        type={sidebarItems.ORDERS}
        icon={<BsFillBagFill />}
      />
      <SidebarItem
        link="/my-profile"
        label="Mi perfil"
        type={sidebarItems.PROFILE}
        image={profilePic}
      />
      <SidebarItem
        handleClick={handleLogout}
        link="/"
        label="Cerrar sesión"
        type={sidebarItems.LOGOUT}
        icon={<BsArrowBarLeft />}
      />
    </ul>
  );
}

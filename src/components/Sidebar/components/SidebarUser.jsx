import { useDispatch, useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import { updateToggled } from '@/store/sidebar/slice';
import useCacheImage from '@/hooks/useCacheImage';
import { BsArrowBarLeft, BsFillBagFill } from 'react-icons/bs';
import { logout } from '@/store/auth/slice';
import { clearCart } from '@/store/cart/slice';
import { views } from '@/App';
import useAppNavigate from '@/hooks/useAppNavigate';

export default function SidebarUser() {
  const dispatch = useDispatch();
  const navigate = useAppNavigate();

  const { imageKey } = useSelector((state) => state.user);
  const { imageSrc: profilePic } = useCacheImage({ key: imageKey });

  const handleLogout = () => {
    dispatch(updateToggled(false));
    dispatch(logout());
    dispatch(clearCart());
    navigate(views.HOME)
  };

  return (
    <ul className="flex flex-col">
      <h1 className="font-semibold p-2">Perfil</h1>
      <SidebarItem
        label="Pedidos"
        view={views.ORDERS}
        icon={<BsFillBagFill />}
      />
      <SidebarItem
        label="Mi perfil"
        view={views.MY_PROFILE}
        image={profilePic}
      />
      <SidebarItem
        handleClick={handleLogout}
        label="Cerrar sesión"
        icon={<BsArrowBarLeft />}
      />
    </ul>
  );
}

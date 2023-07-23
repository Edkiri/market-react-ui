import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'flowbite-react';

import { logout } from '@/store/slices/userSlice';
import { DropdownDivider } from 'flowbite-react/lib/esm/components/Dropdown/DropdownDivider';

export default function HeaderProfile() {
  const username = useSelector((state) => state.user.data.name);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Dropdown
        className="bg-gray-300 text-black w-52 mt-5"
        inline
        label={username}
      >
        <Dropdown.Item className=" text-md">Ver perfil</Dropdown.Item>
        <Dropdown.Item className=" text-md">Mis pedidos</Dropdown.Item>
        <Dropdown.Item className=" mt-4 text-md" onClick={handleLogout}>
          Cerrar sesión
        </Dropdown.Item>
      </Dropdown>
    </>
  );
}

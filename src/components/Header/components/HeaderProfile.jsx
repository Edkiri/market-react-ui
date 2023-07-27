import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Avatar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { logout } from '@/store/auth/slice';
import useProfilePic from '../hooks/useProfilePic';
import useCacheImage from '@/hooks/useCacheImage';

export default function HeaderProfile() {
  const { name } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { imageKey } = useSelector((state) => state.user);
  const { imageSrc: profilePic } = useCacheImage({ key: imageKey });

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="flex h-full items-center gap-3">
        <Avatar alt="avatar of Jese" img={profilePic} rounded />
        <Dropdown
          className="bg-gray-300 text-black w-52 mt-5"
          inline
          label={name}
        >
          <Dropdown.Item
            className="text-md"
            onClick={() => navigate('/my-profile')}
          >
            Actualizar perfil
          </Dropdown.Item>
          <Dropdown.Item className="text-md">Mis pedidos</Dropdown.Item>
          <Dropdown.Item className="mt-4 text-md" onClick={handleLogout}>
            Cerrar sesión
          </Dropdown.Item>
        </Dropdown>
      </div>
    </>
  );
}

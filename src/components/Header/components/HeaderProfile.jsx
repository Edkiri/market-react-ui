import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, Avatar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { logout } from '@/store/auth/slice';
import { getProfilePic } from '@/api';

export default function HeaderProfile() {
  const { name, imageKey } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (imageKey) {
        try {
          setLoading(true);
          const image = await getProfilePic({ imageKey });
          setProfilePic(image);
          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      }
    })();
  }, [imageKey]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="flex h-full items-center gap-3">
        <Avatar alt="avatar of Jese" img={profilePic?.url || null} rounded />
        <Dropdown
          className="bg-gray-300 text-black w-52 mt-5"
          inline
          label={name}
        >
          <Dropdown.Item
            className="text-md"
            onClick={() => navigate('/my-profile')}
          >
            Ver perfil
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

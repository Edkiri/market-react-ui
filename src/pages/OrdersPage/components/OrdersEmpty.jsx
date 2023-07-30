import { MkButton } from '@/components/Core';
import { selectItem } from '@/store/sidebar/slice';
import { BsBagXFill, BsPlusLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function OrdersEmpty() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoToProducts = () => {
    dispatch(selectItem(sidebarItems.HOME));
    navigate('/');
  };

  return (
    <section className="w-full m-auto max-w-lg flex flex-col gap-6 mt-8 items-center">
      <div className="border-2 max-w-min rounded-full text-5xl flex justify-center items-center p-4 border-neutral-500">
        <BsBagXFill className="" />
      </div>
      <p className="text-lg text-center max-w-sm">
        Parece que aún no has agregado ningún producto a tu carrito.
      </p>
      <MkButton
        handleClick={handleGoToProducts}
        label="Explorar productos"
        icon={<BsPlusLg />}
      />
    </section>
  );
}

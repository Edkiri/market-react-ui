import { BsCartXFill, BsPlusLg } from 'react-icons/bs';

import { MkButton } from '@/components/Core';
import useAppNavigate from '@/hooks/useAppNavigate';
import { views } from '@/App';

export default function EmptyCart() {
  const navigate = useAppNavigate();

  return (
    <section className="w-full m-auto max-w-lg flex flex-col gap-6 mt-8 items-center">
      <div className="border-2 max-w-min rounded-full text-5xl flex justify-center items-center p-4 border-neutral-500">
        <BsCartXFill className="" />
      </div>
      <p className="text-lg text-center max-w-sm">
        Aún no has agregado ningún producto a tu carrito.
      </p>
      <MkButton
        handleClick={() => navigate(views.HOME)}
        label="Agregar al carrito"
        icon={<BsPlusLg />}
      />
    </section>
  );
}

import { views } from '@/App';
import { MkButton } from '@/components/Core';
import useAppNavigate from '@/hooks/useAppNavigate';
import { BsBagXFill, BsPlusLg } from 'react-icons/bs';

export default function OrdersEmpty() {
  const navigate = useAppNavigate();

  return (
    <section className="w-full m-auto max-w-lg flex flex-col gap-6 mt-8 items-center">
      <div className="border-2 max-w-min rounded-full text-5xl flex justify-center items-center p-4 border-neutral-500">
        <BsBagXFill className="" />
      </div>
      <p className="text-lg text-center max-w-sm">
        Aún no has hecho ningún pedido
      </p>
      <MkButton
        handleClick={() => navigate(views.HOME)}
        label="Explorar productos"
        icon={<BsPlusLg />}
      />
    </section>
  );
}

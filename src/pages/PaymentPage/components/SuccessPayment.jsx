import { MkButton } from "@/components/Core";
import { selectItem, sidebarItems } from "@/store/sidebar/slice";
import { BsFillBagFill, BsFillCheckCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SuccessPayment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoToOrders = () => {
    navigate('/orders');
    dispatch(selectItem(sidebarItems.ORDERS));
  }
  return (
    <section className="w-full m-auto max-w-lg flex flex-col gap-6 mt-8 items-center">
      <div className="border-2 max-w-min rounded-full text-5xl flex justify-center items-center p-4 border-neutral-500">
        <BsFillCheckCircleFill className="" />
      </div>
      <p className="text-lg text-center max-w-sm">
        Tu pedido se ha realizado con éxito !
      </p>
      <MkButton
        handleClick={handleGoToOrders}
        label="Seguir tus pedidos"
        icon={<BsFillBagFill />}
      />
    </section>
  );
}
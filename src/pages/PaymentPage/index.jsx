import { useState } from 'react';
import OrderForm from './components/OrderForm';
import SuccessPayment from './components/SuccessPayment';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/store/cart/slice';

export default function PaymentPage() {
  const [created, setCreated] = useState(false);

  const dispatch = useDispatch();

  const successCreated = () => {
    dispatch(clearCart());
    setCreated(true);
  };

  if (created) return <SuccessPayment />;

  return (
    <div className="flex flex-col gap-4 mt-8 max-w-xl m-auto w-full">
      <h1 className="font-bold text-center text-2xl">Finaliza tu compra</h1>
      <OrderForm onSuccess={successCreated} />
    </div>
  );
}

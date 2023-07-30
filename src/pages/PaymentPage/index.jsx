import OrderForm from './components/OrderForm';

export default function PaymentPage() {
  return (
    <div className="flex flex-col gap-4 mt-8 max-w-xl m-auto w-full">
      <h1 className="font-bold text-center text-2xl">Finaliza tu compra</h1>
      <OrderForm />
    </div>
  );
}

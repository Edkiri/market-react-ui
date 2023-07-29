import { useSelector } from 'react-redux';
import CartItem from './components/CartItem';
import OrderForm from './components/OrderForm';

export default function CartPage() {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((val, item) => {
    const { price, quantity } = item;
    const result = Number(price) * Number(quantity);
    return val + result;
  }, 0);

  return (
    <div className="cart-list max-w-4xl m-auto flex flex-col w-full gap-4">
      <div className="flex flex-col gap-4 max-w-xl m-auto w-full">
        <h1 className="font-bold text-center text-2xl mb-4">Finaliza tu compra</h1>
        <OrderForm cart={cart} />
      </div>

      <header className="w-full flex flex-col mt-8 justify-between">
        <h1 className="font-bold text-center text-2xl">Resumen</h1>
        {total > 0 && (
          <p className="text-md font-bold tracking-wide text-right border-b border-neutral-800 dark:border-neutral-500 pb-4">{`Total: ${total.toFixed(
            2,
          )}`} Є</p>
        )}
      </header>
      <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 auto-rows-min place-items-center sm:place-items-stretch">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

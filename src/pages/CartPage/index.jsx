import { useSelector } from 'react-redux';
import CartItem from './components/CartItem';
import OrderForm from './components/OrderForm';

export default function CartPage() {
  const { cart } = useSelector((state) => state);

  const total = cart.reduce((val, item) => {
    const { price, quantity } = item;
    const result = Number(price) * Number(quantity);
        return val + result;
  }, 0);

  return (
    <div className="cart-list flex flex-col m-auto w-full gap-4 max-w-lg">
      <div className="flex flex-col gap-4 w-full">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {total > 0 && (
          <span className="text-md font-bold tracking-wide text-right border-b border-neutral-800 dark:border-neutral-500 pb-4">{`Total: Є ${total.toFixed(
            2,
          )}`}</span>
        )}
      </div>
      <OrderForm />
    </div>
  );
}

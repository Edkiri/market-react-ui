import { useSelector } from 'react-redux';
import CartItem from './components/CartItem';
import EmptyCart from './components/EmptyCart';
import { MkButton } from '@/components/Core';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const toggled = useSelector((state) => state.sidebar.toggled);

  const cart = useSelector((state) => state.cart);
  
  const navigate = useNavigate();

  const total = cart.reduce((val, item) => {
    const { price, quantity } = item;
    const result = Number(price) * Number(quantity);
    return val + result;
  }, 0);
  
  const handleNavigateToPayment = () => {
    navigate("/payment");
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="cart-list max-w-4xl m-auto flex flex-col w-full gap-4">
      <header className="w-full flex first-line:items-center justify-between border-b border-neutral-800 dark:border-neutral-500 pb-4">
        <h1 className="font-bold text-center text-2xl">Resumen</h1>
        {total > 0 && (
          <p className="text-md md:text-lg font-bold tracking-wide text-right ">
            {`Total: ${total.toFixed(2)}`} Є
          </p>
        )}
      </header>
      <div
        className={`w-full gap-4 grid grid-cols-1 auto-rows-min place-items-center sm:place-items-stretch ${
          toggled ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
        }`}
      >
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full">
        <MkButton
          stretch
          label="Comprar"
          handleClick={handleNavigateToPayment}
        />
      </div>
    </div>
  );
}

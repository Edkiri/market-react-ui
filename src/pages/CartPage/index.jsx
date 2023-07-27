import { useSelector } from 'react-redux';
import CartItem from './components/CartItem';

export default function CartPage() {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <div className="cart-list flex flex-col gap-2">
      {cart.map((item) => (
        <CartItem key={item.id} item={item}/>
      ))}
    </div>
  );
}

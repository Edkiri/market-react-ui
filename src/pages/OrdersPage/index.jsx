import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSales } from '@/api/orders';
import { ordersSuccess } from '@/store/orders/slice';

export default function OrdersPage() {
  const orders = useSelector((state) => state.orders);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (!orders.length) {
          const { data } = await getSales({ token });
          dispatch(ordersSuccess(data.sales));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  console.log(orders);
  return <h1>Pedidos</h1>;
}

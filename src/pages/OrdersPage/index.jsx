import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSales } from '@/api/orders';
import { ordersSuccess } from '@/store/orders/slice';
import { MkSpinner } from '@/components/Core';
import OrdersEmpty from './components/OrdersEmpty';
import OrdersTable from '@/components/OrdersTable';

export default function OrdersPage() {
  const orders = useSelector((state) => state.orders);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await getSales({ token });
        setLoading(false);
        dispatch(ordersSuccess(data.sales));
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();
  }, []);

  if (loading) return <MkSpinner />;

  if (!orders.length) return <OrdersEmpty />;

  return <OrdersTable orders={orders} />;
}

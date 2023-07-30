import { getAllOrders } from '@/api/orders';
import { MkSpinner } from '@/components/Core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EmptyOrders from './components/EmptyOrders';
import OrdersTable from '@/components/OrdersTable';

export default function AdminOrdersPage() {
  const token = useSelector((state) => state.user.token);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getAllOrders({ token });
        setOrders(response.data.sales);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <MkSpinner />;

  if (!loading && !orders.length) return <EmptyOrders />;

  return <OrdersTable orders={orders} />;
}

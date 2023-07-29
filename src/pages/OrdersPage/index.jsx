import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSales } from '@/api/orders';
import { ordersSuccess } from '@/store/orders/slice';
import OrderRow from './components/OrderRow';

const headers = {
  STATUS: 'Estado',
  DATE: 'Fecha',
  TOTAL: 'Total',
  ACTIONS: 'Acciones',
};

export default function OrdersPage() {
  const orders = useSelector((state) => state.orders);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getSales({ token });
        dispatch(ordersSuccess(data.sales));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="table w-full m-auto max-w-2xl text-sm md:text-lg border border-slate-600">
      <div className="table-header-group">
        <div className="table-row">
          {Object.values(headers).map((header) => (
            <div
              key={header}
              className="table-cell text-left border border-slate-600 bg-slate-300 dark:bg-slate-700 p-2"
            >
              {header}
            </div>
          ))}
        </div>
      </div>

      <div className="table-row-group px-2 py-4">
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

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
        if (!orders.length) {
          const { data } = await getSales({ token });
          dispatch(ordersSuccess(data.sales));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <table className='table-auto w-full max-w-lg m-auto text-left text-sm md:text-lg'>
      <thead className=''>
        <tr className=''>
          {Object.values(headers).map((header) => (
            <th className={`border p-2 px-4 border-slate-500 ${header === headers.TOTAL && 'hidden min-[450px]:block'}`} key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className=''>
        {orders.map((order) => (
          <OrderRow order={order} />
        ))}
      </tbody>
    </table>
  );
}

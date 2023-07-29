import { formatDate } from '@/utils';

const statusOptions = {
  pending: 'Solicitada',
  shipped: 'Enviada',
  delivered: 'Entregada',
};

export default function OrderRow({ order }) {
  const total = order.orders.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  const styles =
    'table-cell text-gray-700 dark:text-gray-400 border border-slate-600 p-2';

  return (
    <tr className="table-row">
      <td className={styles}>{statusOptions[order.status]}</td>
      <td className={styles}>{formatDate(order.created_at)}</td>
      <td className={styles}>{total.toFixed(2)} Є</td>
      <td className={styles}>
        <button type="button" className="text-center w-full">
          Detalle
        </button>
      </td>
    </tr>
  );
}

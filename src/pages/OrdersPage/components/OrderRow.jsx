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
    'border p-2 px-4 border-slate-500 leading-4 text-gray-700 dark:text-gray-400';

  return (
    <tr>
      <td className={styles}>{statusOptions[order.status]}</td>
      <td className={styles}>{formatDate(order.created_at)}</td>
      <td className={styles + ' hidden min-[450px]:block'}>
        Є {total.toFixed(2)}
      </td>
      <td className={styles}>
        <button type="button" className="text-center w-full">
          Detalle
        </button>
      </td>
    </tr>
  );
}

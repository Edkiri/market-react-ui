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
    <div className="table-row">
      <div className={styles}>{statusOptions[order.status]}</div>
      <div className={styles}>{formatDate(order.created_at)}</div>
      <div className={styles}>{total.toFixed(2)} Є</div>
      <div className={styles}>
        <button type="button" className="text-center w-full">
          Detalle
        </button>
      </div>
    </div>
  );
}

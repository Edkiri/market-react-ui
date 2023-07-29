import useCacheImage from '@/hooks/useCacheImage';

export default function CartItem({ item }) {
  const { imageSrc } = useCacheImage({ key: item.image_key });

  const total = Number(item.price) * Number(item.quantity);
  return (
    <div className="flex gap-2 md:gap-4 w-full border-b border-neutral-800 dark:border-neutral-500 pb-2 md:pb-4">
      <img
        className="rounded w-16 h-12"
        src={imageSrc}
        alt={`image of ${item.name}`}
      />
      <div className="grow h-full flex flex-col justify-center">
        <h3 className="text-md font-bold tracking-wide">{item.name}</h3>
        <span className="font-normal leading-4 text-gray-700 dark:text-gray-400">{`${item.price.toFixed(
          2,
        )} Є / ${
          item.measurement === 'unit' ? `Unidad` : item.measurement
        }`}</span>
      </div>
      <div className="flex flex-col h-full justify-center text-right">
        <h3 className="text-md font-bold tracking-wide">{`${total.toFixed(
          2,
        )}`} Є</h3>
        <span className="font-normal leading-4 text-gray-700 dark:text-gray-400">
          {item.quantity}{' '}
          {item.measurement === 'unit'
            ? `${item.quantity > 0 ? 'Unidades' : 'Unidad'}`
            : item.measurement}
        </span>
      </div>
    </div>
  );
}

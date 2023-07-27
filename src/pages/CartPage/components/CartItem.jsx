import useCacheImage from '@/hooks/useCacheImage';

export default function CartItem({ item }) {
  const { imageSrc } = useCacheImage({ key: item.image_key });

  const total = Number(item.price) * Number(item.quantity);

  return (
    <div className="flex gap-2 md:gap-4 w-full">
      <img
        className="rounded w-16"
        src={imageSrc}
        alt={`image of ${item.name}`}
      />
      <div className="grow h-full flex flex-col justify-center">
        <h3 className="text-md font-bold tracking-wide">{item.name}</h3>
        <span className="font-normal leading-4 text-gray-700 dark:text-gray-400">{`Є${item.price}`}</span>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-bold tracking-wide">{`Є${total.toFixed(2)}`}</h3>
        <span className="font-normal leading-4 text-gray-700 dark:text-gray-400">{`${item.quantity} unidades`}</span>
      </div>
    </div>
  );
}

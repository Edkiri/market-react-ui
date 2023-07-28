import { useDispatch } from 'react-redux';
import { FaCartShopping } from 'react-icons/fa6';

import { addOrder } from '@/store/cart/slice';
import MkButton from '@/components/Core/MkButton';
import useCacheImage from '@/hooks/useCacheImage';

export default function ProductCard({ product }) {
  const { imageSrc, loading } = useCacheImage({ key: product.image_key });
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addOrder(product));
  };

  return (
    <div className="flex gap-2 md:gap-4 w-full border-b border-neutral-800 dark:border-neutral-500 pb-2 md:pb-4">
      <img
        className="rounded w-24 h-16 bg-auto bg-center justify-self-center self-center"
        src={imageSrc}
        alt={`image of ${product.name}`}
      />
      <div className="flex flex-col w-full">
        <div className="flex grow">
          <div className="grow h-full flex flex-col justify-start">
            <h3 className="text-md font-bold tracking-wide">{product.name}</h3>
            <p className="font-normal text-md  leading-4 text-gray-700 dark:text-gray-400">{`Є${product.price.toFixed(
              2,
            )}`}</p>
          </div>
          <span className="font-bold leading-4 text-gray-700 dark:text-gray-400">{`${'2'}`}</span>
        </div>
        <footer className="flex justify-end">
          <MkButton small label="Agregar" icon={<FaCartShopping />} />
        </footer>
      </div>
    </div>
  );
}

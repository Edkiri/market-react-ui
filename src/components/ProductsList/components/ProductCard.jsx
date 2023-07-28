import { useDispatch } from 'react-redux';
import { FaCartShopping } from 'react-icons/fa6';

import { addOrder } from '@/store/cart/slice';
import MkButton from '@/components/Core/MkButton';
import useCacheImage from '@/hooks/useCacheImage';

export default function ProductCard({ product }) {
  const { imageSrc } = useCacheImage({ key: product.image_key });
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addOrder(product));
  };

  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 rounded flex flex-col min-w-full max-w[200px] sm:min-w-min sm:max-w-auto">
      <img
        src={imageSrc}
        alt={`Imagen de ${product.name}`}
        className="bg-contain bg-center h-40 w-auto"
      />
      <div className="flex flex-col justify-end grow p-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <div className="font-normal mb-4 text-gray-700 dark:text-gray-400">
          <p>{product.description}</p>
        </div>
        <MkButton
          label={'Agregar'}
          handleClick={handleAddToCart}
          icon={<FaCartShopping />}
        />
      </div>
    </div>
  );
}

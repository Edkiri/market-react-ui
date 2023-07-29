import { useDispatch, useSelector } from 'react-redux';
import { FaCartShopping } from 'react-icons/fa6';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

import { addOrder, removeOrder } from '@/store/cart/slice';
import MkButton from '@/components/Core/MkButton';
import useCacheImage from '@/hooks/useCacheImage';

export default function ProductCard({ product }) {
  const { imageSrc, loading } = useCacheImage({ key: product.image_key });
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addOrder(product));
  };

  const handleRemoveToCart = () => {
    dispatch(removeOrder({ id: product.id }));
  };

  const quantity = cart.find((item) => item.id === product.id)?.quantity || 0;

  return (
    <div className="flex gap-2 md:gap-4 w-full border-b border-neutral-800 dark:border-neutral-500 pb-2 md:pb-4">
      <img
        className="rounded w-28 h-16 justify-self-center self-center"
        src={imageSrc}
        alt={`image of ${product.name}`}
      />
      <div className="flex flex-col w-full gap-2">
        <div className="flex grow">
          <div className="grow h-full flex flex-col justify-start">
            <h3 className="text-md font-bold tracking-wide">{product.name}</h3>
            <p className="font-normal text-md  leading-4 text-gray-700 dark:text-gray-400">{`Є${product.price.toFixed(
              2,
            )}`}</p>
          </div>
          {quantity > 0 && (
            <div className="flex gap-2 items-center h-full">
              <button
                onClick={handleRemoveToCart}
                className="h-min pointer-events-auto"
              >
                <BsFillArrowDownCircleFill size="23" />
              </button>
              <span className="font-bold leading-4 text-gray-700 dark:text-gray-400">
                {quantity}{' '}
                {product.measurement === 'unit'
                  ? `${quantity > 0 ? 'Unidades' : 'Unidad'}`
                  : product.measurement}
              </span>
            </div>
          )}
        </div>
        <footer className="flex justify-end">
          <MkButton
            handleClick={handleAddToCart}
            small
            label="Agregar"
            icon={<FaCartShopping />}
          />
        </footer>
      </div>
    </div>
  );
}

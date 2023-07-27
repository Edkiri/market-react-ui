import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaCartShopping } from 'react-icons/fa6';
import { addOrder } from '@/store/cart/slice';
import MkButton from '../Core/MkButton';
import useCacheImage from '@/hooks/useCacheImage';

export default function ProductCard({ product }) {
  const { imageSrc } = useCacheImage({ key: product.image_key });
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addOrder(product));
  };

  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 rounded flex flex-col max-w-xs min-w-[150px] ">
      <img
        src={imageSrc}
        alt={`Imagen de ${product.name}`}
        className="w-full bg-contain bg-center h-full md:max-h-48 min-h-[62px]"
      />
      <div className="flex flex-col justify-end grow py-4 px-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          <p>{product.description}</p>
        </div>
        <MkButton handleClick={handleAddToCart} icon={<FaCartShopping />} />
      </div>
    </div>
  );
}

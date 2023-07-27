import { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';

import { getImageByKey } from '@/api/media';

export default function ProductCard({ product }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getImageByKey({ key: product.image_key });
        setImage(response.url);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    // <Card className='' imgAlt={`Image of ${product.name}`} imgSrc={image}>
    <div className="bg-neutral-200 dark:bg-neutral-800  rounded flex flex-col max-w-xs min-w-xs">
      <img src={image} alt={`Imagen de ${product.name}`} className="w-full bg-contain bg-center h-full md:max-h-48" />
      <div className='flex flex-col justify-end grow py-4 px-2'>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
    // </Card>
  );
}

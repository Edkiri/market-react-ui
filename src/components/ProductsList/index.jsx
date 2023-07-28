import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSuccess } from '@/store/products/slice';
import { getProducts } from '@/api/products';
import ProductCard from './components/ProductCard';

export default function ProductsList() {
  const products = useSelector((state) => state.products);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (products.length) {
          setLoading(true);
          const { data } = await getProducts();
          setLoading(false);
          dispatch(usersSuccess(data.products));
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(error.response.data.message);
      }
    })();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min place-items-center sm:place-items-stretch">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

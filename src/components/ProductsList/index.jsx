import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSuccess } from '@/store/products/slice';
import { getProducts } from '@/api/products';
import ProductCard from '../ProductCard';

export default function ProductsList() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { data } = await getProducts();
      dispatch(usersSuccess(data.products));
    })();
  }, []);

  return (
    <>
      <div className="grid p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-min place-items-center sm:place-items-stretch">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

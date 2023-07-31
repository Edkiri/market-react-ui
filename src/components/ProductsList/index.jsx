import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsSuccess } from '@/store/products/slice';
import { getProducts } from '@/api/products';
import ProductCard from './components/ProductCard';
import { MkSpinner } from '../Core';
import EmptyProducts from './components/EmptyProducts';

export default function ProductsList({ products }) {
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory,
  );
  const toggled = useSelector((state) => state.sidebar.toggled);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let data;
        if (selectedCategory.name === 'todas') {
          const response = await getProducts();
          data = response.data;
        } else {
          const response = await getProducts({
            category_id: selectedCategory.id,
          });
          data = response.data;
        }
        setLoading(false);
        dispatch(productsSuccess(data.products));
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(error.response.data.message);
      }
    })();
  }, [selectedCategory]);

  if (loading) return <MkSpinner />;

  if (!loading && !products.length) return <EmptyProducts />;

  return (
    <>
      <div
        className={`grid w-full max-w-4xl m-auto grid-cols-1 gap-4 auto-rows-min place-items-center sm:place-items-stretch
          ${toggled ? 'lg:grid-cols-2' : 'sm:grid-cols-2'}
        } `}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

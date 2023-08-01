import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsSuccess } from '@/store/products/slice';
import { getProducts } from '@/api/products';
import ProductCard from './components/ProductCard';
import EmptyProducts from './components/EmptyProducts';
import Pagination from '../Pagination';

export default function ProductsList({ products }) {
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory,
  );
  const toggled = useSelector((state) => state.sidebar.toggled);
  const paginate = useSelector(state => state.products.paginate);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const query = {
          page: paginate.current,
        };
        if (selectedCategory.name !== 'todas') {
          query.category_id = selectedCategory.id;
        }
        const response = await getProducts(query);
        setLoading(false);
        dispatch(productsSuccess({
          products: response.data.products,
          lastPage: response.data.last_page,
        }));
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(error.response.data.message);
      }
    })();
  }, [selectedCategory, paginate]);

  if (!loading && !products.length) return <EmptyProducts />;

  return (
    <>
      {paginate.lastPage !== 1 && (
        <Pagination paginate={paginate} />
      )}
      {!loading && (
        <div
          className={`grid w-full max-w-4xl m-auto grid-cols-1 gap-4 auto-rows-min place-items-center sm:place-items-stretch
          ${toggled ? 'lg:grid-cols-2' : 'sm:grid-cols-2'}
        } `}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MkSpinner } from '../Core';
import { getCategories } from '@/api/products';
import { categoriesSuccess } from '@/store/products/slice';

export default function CategoryList() {
  const categories = useSelector((state) => state.products.categories);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getCategories();
        dispatch(categoriesSuccess({ categories: response.data.categories }));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(error.response.data.message);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <MkSpinner />
      ) : (
        <>
          <ul className="flex flex-wrap gap-2 my-2">
            <h1 className='font-bold'>Categorías: </h1>
            {categories.map((category) => (
              <button
                className="min-w-max px-2 py-1 text-sm bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full"
                key={category.id}
              >
                {category.name}
              </button>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

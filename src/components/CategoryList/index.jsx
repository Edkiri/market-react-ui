import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MkSpinner } from '../Core';
import { getCategories } from '@/api/products';
import {
  categoriesSuccess,
  updateSelectedCategoty,
} from '@/store/products/slice';

export default function CategoryList() {
  const categories = useSelector((state) => state.products.categories);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory,
  );

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

  const categoryStyle =
    'min-w-max px-2 py-1 text-sm bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full hover:bg-indigo-300 hover:dark:bg-indigo-500';

  const handleChangeCategory = (category) => {
    dispatch(updateSelectedCategoty({ category }));
  };

  return (
    <>
      {loading ? (
        <MkSpinner />
      ) : (
        <>
          <ul className="flex flex-wrap gap-2 my-2">
            <h1 className="font-bold">Categorías: </h1>
            {categories.map((category) => (
              <button
                onClick={() => handleChangeCategory(category)}
                className={`${categoryStyle} ${
                  selectedCategory.name === category.name &&
                  'bg-indigo-300 dark:bg-indigo-500'
                }`}
                key={category.name}
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

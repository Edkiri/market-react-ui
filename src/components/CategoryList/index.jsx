import { useDispatch, useSelector } from 'react-redux';
import { MkSpinner } from '../Core';
import { updateSelectedCategoty } from '@/store/products/slice';
import useCategories from '@/hooks/useCategories';

export default function CategoryList() {
  const { categories, loading } = useCategories();
  const selectedCategoryId = useSelector(state => state.products.filters.category_id)
  const dispatch = useDispatch();

  const categoryStyle =
    'px-2 py-1 text-sm min-w-max bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full hover:bg-indigo-300 hover:dark:bg-indigo-500';

  const handleChangeCategory = (categoryId) => {
    dispatch(updateSelectedCategoty({ categoryId }));
  };

  return (
    <>
      {loading ? (
        <MkSpinner />
      ) : (
        <>
          <ul className="flex flex-wrap gap-2 pb-4 border-b border-neutral-500">
            {categories.map((category) => (
              <button
                onClick={() => handleChangeCategory(category.id)}
                className={`${categoryStyle} ${selectedCategoryId === category.id &&
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

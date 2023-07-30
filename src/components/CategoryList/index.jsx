import { useDispatch, useSelector } from 'react-redux';
import { MkSpinner } from '../Core';
import { updateSelectedCategoty } from '@/store/products/slice';
import useCategories from '@/hooks/useCategories';

export default function CategoryList() {
  const { categories, selectedCategory, loading } = useCategories();
  const dispatch = useDispatch();

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

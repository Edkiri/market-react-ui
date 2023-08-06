import useInputForm from '@/hooks/useInputForm';
import { MkButton } from '../Core';
import { getProducts } from '@/api/products';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsSuccess } from '@/store/products/slice';

export default function SearchForm() {
  const searchInput = useInputForm('');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchInput.value.trim()) return;

    try {
      setLoading(true);
      const response = await getProducts({ name: searchInput.value });
      dispatch(productsSuccess({
        products: response.data.products,
        currentPage: 1,
        lastPage: response.data.last_page,
      }));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          {...searchInput}
          placeholder="Buscar por nombre"
        />
        <div className="absolute right-2.5 bottom-2">
          <MkButton type="submit" label="Buscar" />
        </div>
      </div>
    </form>
  );
}

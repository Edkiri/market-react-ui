import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '@/api/products';
import { categoriesSuccess } from '@/store/products/slice';

export default function useCategories() {
  const categories = useSelector((state) => state.products.categories);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length) return;
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

  return { categories, loading, error };
}

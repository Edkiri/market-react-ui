import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '@/api/products';

export default function useCategories() {
  const categories = useSelector((state) => state.products.categories);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory,
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if(categories.length) return;
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

  return { categories, selectedCategory, loading, error };
}

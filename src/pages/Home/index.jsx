import CategoryList from '@/components/CategoryList';
import ProductsList from '@/components/ProductsList';
import SearchForm from '@/components/SearchForm';
import { useSelector } from 'react-redux';

export default function Home() {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <SearchForm />
        <CategoryList />
        <ProductsList products={products} />
      </div>
    </>
  );
}

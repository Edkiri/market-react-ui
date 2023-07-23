import Header from '@/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <div className='min-h-screen dark:text-white dark:bg-black px-3'>
      <div className="container flex-col mx-lg mx-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}

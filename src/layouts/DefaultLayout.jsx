import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen dark:text-white dark:bg-black">
      <div className="flex flex-col">
        <Header />
        <div className="flex p-4">
          <Sidebar />
          <div className="grow">{children}</div>
        </div>
      </div>
    </div>
  );
}

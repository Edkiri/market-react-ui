import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col dark:text-white dark:bg-black">
      <div className="flex flex-col grow">
        <Header />
        <div className="flex grow relative">
          <Sidebar />
          <div className="grow p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

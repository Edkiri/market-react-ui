import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col dark:text-white dark:bg-black">
      <div className="flex flex-col grow">
        <Header />
        <div className="flex grow relative">
          <Sidebar />
          <div className="grow w-full p-4 max-w-4xl mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

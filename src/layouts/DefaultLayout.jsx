import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col dark:text-white dark:bg-black">
      <div className="flex flex-col grow">
        <Header />
        <div className="flex grow">
          <Sidebar />
          <div className="grow">{children}</div>
        </div>
      </div>
    </div>
  );
}

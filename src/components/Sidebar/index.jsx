import SidebarItem from './components/SidebarItem';
import { FaAppleWhole, FaCartShopping } from 'react-icons/fa6';
import { BsList } from 'react-icons/bs';
import { useState } from 'react';

export default function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <ul
      className={`py-4 px-2 sm:px-4 bottom-0  left-0 top-0 right-0 sm:static flex flex-col gap-3 border-r border-neutral-800 dark:border-neutral-500 ${
        toggleSidebar && 'absolute sm:w-72 bg-white dark:bg-black'
      }`}
    >
      <header className="mb-4">
        <button onClick={handleToggle} className="">
          <BsList className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </header>
      {toggleSidebar && (
        <>
          <SidebarItem
            hideSidebar={() => setToggleSidebar(false)}
            link="/"
            label="Productos"
            icon={<FaAppleWhole />}
          />
          <SidebarItem
            hideSidebar={() => setToggleSidebar(false)}
            link="/cart"
            label="Carrito"
            icon={<FaCartShopping />}
          />
        </>
      )}
    </ul>
  );
}

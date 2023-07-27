export default function SidebarItem({ onClick, label, icon }) {
  return (
    <li>
      <button
        className="w-full text-md p-2 bg-none rounded-sm text-left hover:bg-neutral-200 hover:dark:bg-neutral-800 flex items-center gap-2"
        onClick={onClick}
      >
        {icon}
        {label}
      </button>
    </li>
  );
}

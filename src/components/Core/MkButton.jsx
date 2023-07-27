export default function MkButton({ handleClick, icon }) {
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {icon}
      Agregar
    </button>
  );
}

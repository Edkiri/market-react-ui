import MkSpinner from './MkSpinner';

export default function MkButton({
  handleClick,
  type,
  icon,
  label,
  stretch,
  loading = false,
}) {
  return (
    <button
      type={type || 'text'}
      disabled={loading}
      onClick={handleClick}
      className={`
        flex items-center gap-2 h-9 justify-center rounded-md bg-indigo-600 px-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
        ${stretch && 'w-full'} 
        `}
    >
      {loading ? (
        <MkSpinner />
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </button>
  );
}

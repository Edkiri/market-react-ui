import MkSpinner from './MkSpinner';

export default function MkButton({
  handleClick,
  type,
  icon,
  label,
  stretch,
  small=false,
  loading = false,
}) {
  return (
    <button
      type={type || 'text'}
      disabled={loading}
      onClick={handleClick}
      className={`
        flex items-center justify-center rounded-md bg-indigo-600 px-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
        ${stretch && 'w-full'}
        ${small ? 'h-8 gap-1 text-sm' : 'h-9 gap-2 text-md'}
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

export default function MkInput({ label, error, errorMessage, ...inputProps }) {
  return (
    <div className="w-full">
      <label
        htmlFor={inputProps.id}
        className="block text-lg leading-6 text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          className="text-md block w-full rounded-md border-0 py-2 px-3 dark:text-white text-black dark:bg-neutral-800 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          type={inputProps.type || 'text'}
          {...inputProps}
        />
        {error ? (
          <span className="block mt-2 text-red-500">{errorMessage}</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

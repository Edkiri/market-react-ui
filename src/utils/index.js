export function formatDate(date) {
  const formatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const formatedDate = new Date(date).toLocaleDateString(
    'es-ES',
    formatOptions,
  );
  return formatedDate;
}

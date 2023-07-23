import Header from '../components/Header/Header';

export default function DefaultLayout({ children }) {
  return (
    <div className="container flex-col mx-lg mx-auto">
      <Header />
      {children}
    </div>
  );
}

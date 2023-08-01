import { changePage } from "@/store/products/slice";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function Pagination({ paginate }) {
  const { current, lastPage } = paginate;
  const dispatch = useDispatch();


  const handleNextPage = () => {
    dispatch(changePage({ page: current + 1 }));
  }

  const handlePreviousPage = () => {
    dispatch(changePage({ page: current - 1 }));
  }

  const handleChangePage = (page) => {
    dispatch(changePage({ page }))
  }

  const currentStyles = "w-8 z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  const defaultStyles = "w-8 dark:text-white ring-1 ring-inset ring-neutral-500 hover:bg-neutral-500 focus:outline-offset-0"

  const generateButtons = () => {
    const buttons = [];
    for (let i = 1; i <= lastPage; i++) {
      buttons.push(<button onClick={() => handleChangePage(i)} className={`${current === i ? currentStyles : defaultStyles}`} key={i}>{i}</button>);
    }
    return buttons;
  };

  return (
    <div className="flex bg-transparent items-center justify-end py-2">
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button
          type="button"
          disabled={current === 1}
          onClick={handlePreviousPage}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-neutral-500 enabled:hover:bg-neutral-500 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Previous</span>
          <BsArrowLeft />
        </button>
        {generateButtons()}
        <button
          type="button"
          onClick={handleNextPage}
          disabled={current === lastPage}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-neutral-500 enabled:hover:bg-neutral-500 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Next</span>
          <BsArrowRight />
        </button>
      </nav>
    </div>
  )
}
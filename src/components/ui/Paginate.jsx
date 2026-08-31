import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import ReactPaginateModule from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { useBooking } from "../../features/bookings/useBookings";

// Package import in object. This code get the package component
const ReactPaginate = ReactPaginateModule.default;

function Paginate({ pageCount }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page } = useBooking();

  const nextLabel =
    page === pageCount - 1 ? (
      <button
        disabled={true}
        className="flex cursor-not-allowed items-center gap-2 text-gray-500"
      >
        <span>Next</span>
        <HiChevronRight />
      </button>
    ) : (
      <button className="flex cursor-pointer items-center gap-2">
        <span>Next</span> <HiChevronRight />
      </button>
    );
  const prevLabel =
    page === 0 ? (
      <button
        disabled={true}
        className="flex cursor-not-allowed items-center gap-2 text-gray-500"
      >
        <HiChevronLeft />
        <span>Previous</span>
      </button>
    ) : (
      <button className="flex cursor-pointer items-center gap-2">
        <HiChevronLeft />
        <span>Previous</span>
      </button>
    );

  const handlePageChange = (event) => {
    searchParams.set("page", event.selected);
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-surface h-full w-full px-12 py-10">
      <ReactPaginate
        nextLabel={nextLabel}
        onPageChange={handlePageChange}
        pageCount={pageCount}
        previousLabel={prevLabel}
        renderOnZeroPageCount={true}
        pageClassName="hidden"
        containerClassName="flex gap-10"
        forcePage={page}
      />
    </div>
  );
}

export default Paginate;

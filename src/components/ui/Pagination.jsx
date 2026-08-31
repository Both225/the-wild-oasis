import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constains";
import Paginate from "./Paginate";

function Pagination({ count, page }) {
  const [searchParams] = useSearchParams();

  const pageCount = Math.ceil(count / PAGE_SIZE); // number of pages

  const currentPage = Number(searchParams.get("page"));

  if (pageCount <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-between">
      <p>
        Showing <span>{page * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount - 1
            ? count
            : (Number(page) + 1) * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div>
        <Paginate pageCount={pageCount} />
      </div>
    </div>
  );
}

export default Pagination;

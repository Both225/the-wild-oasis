import { useCabins } from "./useCabins";

import CabinHeader from "./CabinHeader";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CabinTable from "./CabinTable";
import AddCabin from "./AddCabin";
import { useSearchParams } from "react-router-dom";

function CabinPage() {
  const { isLoading, cabins } = useCabins();

  const [searchParams] = useSearchParams();

  // 1.Filter discount
  const filterValue = searchParams.get("discount") || "all";

  let filterCabin;

  if (filterValue === "all") filterCabin = cabins;

  if (filterValue === "no-discount")
    filterCabin = cabins?.filter((cabin) => cabin.discount === 0);

  if (filterValue === "with-discount")
    filterCabin = cabins?.filter((cabin) => cabin.discount > 0);

  // 2.SortBy value

  const sortBy = searchParams.get("sortBy") || "";

  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const sortByCabin = filterCabin?.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

  return (
    <div className="bg-surface-darker h-full w-full px-18 py-10">
      {isLoading ? (
        <p className="flex h-full w-full items-center justify-center text-[3.6rem]">
          Loading...
        </p>
      ) : (
        <div className="bg-surface space-y-10 rounded-lg px-10 py-7">
          <CabinHeader />
          <CabinTable>
            <TableHeader />
            {sortByCabin.map((cabin) => (
              <TableRow key={cabin.id} cabin={cabin} />
            ))}
          </CabinTable>
          <AddCabin />
        </div>
      )}
    </div>
  );
}

export default CabinPage;

import { useQuery } from "@tanstack/react-query";
import { getCabin as getCabinApi } from "../../service/apiCabins";
import { useSearchParams } from "react-router-dom";

export function useCabins() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("discount") || "all";

  const filterField = "discount";

  const filter =
    filterValue === "all" ? null : { field: filterField, value: filterValue };

  // SortBy
  const sortByRaw = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");

  const sortBy = { field, direction };

  // Pagination
  const page = Number(searchParams.get("page")) || 0;

  const {
    isLoading,
    data: { cabins, count } = {},
    error,
  } = useQuery({
    queryKey: ["cabins", filter, sortBy, page],
    queryFn: () => getCabinApi({ filter, sortBy, page }),
  });

  return { isLoading, cabins, error, page, count };
}

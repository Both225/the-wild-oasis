import { useQuery } from "@tanstack/react-query";
import { getCabin as getCabinApi } from "../../service/apiCabins";
import { useSearchParams } from "react-router-dom";

export function useCabins() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("discount") || "all";

  const filterField = "discount";

  const filter =
    filterValue === "all" ? null : { field: filterField, value: filterValue };

  const sortByRaw = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");

  const sortBy = { field, direction };

  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins", filter, sortBy],
    queryFn: () => getCabinApi({ filter, sortBy }),
  });

  return { isLoading, cabins, error };
}

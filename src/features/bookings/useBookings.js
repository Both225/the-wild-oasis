import { useQuery } from "@tanstack/react-query";
import { getBookings as getBookingsApi } from "../../service/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBooking() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "totalPrice-asc";
  const [field, direction] = sortByRaw.split("-");

  const sortBy = { field, direction };

  //Pagination
  const page = Number(searchParams.get("page")) || 0;

  const { data: { bookings, count } = {}, isLoading } = useQuery({
    queryFn: () => getBookingsApi({ filter, sortBy, page }),

    queryKey: ["bookings", filter, sortBy, page],
  });

  return { isLoading, bookings, count, page };
}

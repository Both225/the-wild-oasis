import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings as getBookingsApi } from "../../service/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constains";

export function useBooking() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

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

  // Pagination
  const page = Number(searchParams.get("page")) || 0;

  // React Query
  const { data: { bookings, count } = {}, isLoading } = useQuery({
    queryFn: () => getBookingsApi({ filter, sortBy, page }),

    queryKey: ["bookings", filter, sortBy, page],
  });

  // Pre-fetch data

  const countPage = Math.ceil(count / PAGE_SIZE);

  if (page < countPage - 1) {
    queryClient.query({
      queryFn: () => getBookingsApi({ filter, sortBy, page }),
      queryKey: ["bookings", filter, sortBy, page + 1],
    });
  }

  if (page > 0) {
    queryClient.query({
      queryFn: () => getBookingsApi({ filter, sortBy, page }),
      queryKey: ["bookings", filter, sortBy, page - 1],
    });
  }

  return { isLoading, bookings, count, page };
}

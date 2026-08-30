import { useQuery } from "@tanstack/react-query";
import { getBookings as getBookingsApi } from "../../service/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBooking() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsApi(filter),
    queryKey: ["bookings", filter],
  });

  return { isLoading, bookings };
}

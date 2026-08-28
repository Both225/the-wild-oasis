import { useQuery } from "@tanstack/react-query";
import { getBookings as getBookingsApi } from "../../service/apiBookings";

export function useBooking() {
  const { data: bookings, isLoading } = useQuery({
    queryFn: getBookingsApi,
    queryKey: ["bookings"],
  });

  return { isLoading, bookings };
}

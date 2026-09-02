import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking as getBookingApi } from "../../service/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBookingApi(bookingId),
    retry: false,
  });

  return { isLoading, booking };
}

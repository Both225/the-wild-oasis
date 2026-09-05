import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateBooking as updateBookingApi } from "../../service/apiBookings";

export function useCheckIn() {
  const queryClient = useQueryClient();

  const {
    isLoading: isUpdating,
    mutate: updateCheckIn,
    error,
  } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBookingApi(bookingId, {
        status: "check in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["booking"]);
    },
    onError: (error) => console.log(error),
  });

  return { isUpdating, updateCheckIn };
}

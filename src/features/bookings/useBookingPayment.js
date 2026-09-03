import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking as updateBookingApi } from "../../service/apiBookings";
import toast from "react-hot-toast";

export function useBookingUpdate() {
  const queryClient = useQueryClient();
  const {
    isLoading: isUpdating,
    mutate: updateBooking,
    error,
  } = useMutation({
    mutationFn: ({ id, field, value }) =>
      updateBookingApi({ id, field, value }),
    onSuccess: () => {
      toast("Update successful");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: (error) => console.log(error),
  });
  return { isUpdating, updateBooking, error };
}

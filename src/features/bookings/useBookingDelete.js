import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../service/apiBookings";
import toast from "react-hot-toast";

export function useBookingDelete() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast("Booking delete success");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: (error) => console.log(error),
  });

  return { isDeleting, deleteBooking };
}

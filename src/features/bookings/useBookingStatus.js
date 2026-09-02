import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus as updateStatusApi } from "../../service/apiBookings";
import toast from "react-hot-toast";

export function useBookingStatus() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateStatus } = useMutation({
    mutationFn: ({ id, status }) => updateStatusApi({ id, status }),
    onSuccess: () => {
      toast("Status updated");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: (error) => console.log(error),
  });

  return { isUpdating, updateStatus };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser as updateCurrentUserApi } from "../../service/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdate, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: () => {
      toast("User update success");
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => toast(error),
  });

  return { isUpdate, updateUser };
}

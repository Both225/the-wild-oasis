import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../service/apiCabins";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { reset } = useForm();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast("Cabin delete success");
      queryClient.invalidateQueries(["cabins"]);
      reset();
    },
    onError: (error) => toast(error),
  });

  return { isDeleting, deleteCabin };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabin as editCabinApi } from "../../service/apiCabins";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { reset } = useForm();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: (cabin) => editCabinApi(cabin),
    onSuccess: () => {
      toast("Cabin update success");
      queryClient.invalidateQueries(["cabins"]);
      reset();
    },
    onError: (error) => toast(error),
  });

  return { isEditing, editCabin };
}

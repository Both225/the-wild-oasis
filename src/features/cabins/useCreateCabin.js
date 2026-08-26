import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addCabin as addCabinApi } from "../../service/apiCabins";
import { useForm } from "react-hook-form";

export function useCreateCabin() {
  const { reset, getValues } = useForm();

  const queryClient = useQueryClient();

  const { isLoading: isAdding, mutate: createCabin } = useMutation({
    mutationFn: (newCabin) => addCabinApi(newCabin),
    onSuccess: () => {
      toast("Cabin add success");

      queryClient.invalidateQueries(["cabins"]);
      reset(getValues());
    },
    onError: (error) => toast(error),
  });

  return { isAdding, createCabin };
}

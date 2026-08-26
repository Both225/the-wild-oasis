import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../service/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: (id) => updateSettingApi(id),
    onSuccess: () => {
      toast("Setting update success");
      queryClient.invalidateQueries(["setting"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { isUpdating, updateSetting };
}

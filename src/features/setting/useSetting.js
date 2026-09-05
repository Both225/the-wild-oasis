import { useQuery } from "@tanstack/react-query";
import { getSetting as getSettingApi } from "../../service/apiSettings";

export function useSetting() {
  const { isLoading, data: setting } = useQuery({
    queryKey: ["setting"],
    queryFn: getSettingApi,
  });

  return { isLoading, setting };
}

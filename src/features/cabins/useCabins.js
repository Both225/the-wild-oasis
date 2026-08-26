import { useQuery } from "@tanstack/react-query";
import { getCabin as getCabinApi } from "../../service/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabinApi,
  });

  return { isLoading, cabins, error };
}

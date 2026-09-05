import { useQuery } from "@tanstack/react-query";
import { getCurrentUser as getCurrentUserApi } from "../../service/apiAuth";

export function useCurrentUser() {
  const { isLoading, data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });

  return { isLoading, isAuthenticated: currentUser?.role === "authenticated" };
}

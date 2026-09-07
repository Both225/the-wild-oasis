import { useQuery } from "@tanstack/react-query";
import { getCurrentUser as getCurrentUserApi } from "../../service/apiAuth";

export function useCurrentUser() {
  const { isLoading, data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });

  return {
    isLoading,
    currentUser,
    // Authenticated if a user object exists
    isAuthenticated: Boolean(currentUser),
  };
}

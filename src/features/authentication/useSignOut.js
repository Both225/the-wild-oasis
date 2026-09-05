import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signOutApi } from "../../service/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading: isSignOut, mutate: signOut } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      navigate("/login");
    },
  });

  return { isSignOut, signOut };
}

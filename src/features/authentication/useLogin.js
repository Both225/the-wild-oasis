import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../service/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const {
    isLoading,
    mutate: loginUser,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/");
    },
    onError: () => {
      console.log(error);
      toast.error("Provided wrong email or password");
    },
  });

  return { isLoading, loginUser };
}

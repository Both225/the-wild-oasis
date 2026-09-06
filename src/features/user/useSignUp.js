import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../service/apiAuth";

export function useSignUp() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: (user) => {
      console.log(user);
    },
    onError: (error) => console.log(error),
  });

  return { isLoading, signup };
}

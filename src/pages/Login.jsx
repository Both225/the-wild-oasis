import { Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useLogin } from "../features/authentication/useLogin";
import Spinner from "../components/ui/Spinner";

function LoginForm() {
  const { formState, handleSubmit, control } = useForm({
    defaultValues: {
      email: "testing2026@gmail.com",
      password: "test123",
    },
  });
  const { isLoading, loginUser } = useLogin();

  const { errors } = formState;

  function onSubmit({ email, password }) {
    loginUser({ email, password });
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-surface flex w-160 flex-col items-stretch justify-stretch gap-8 rounded-2xl px-10 py-6">
      <h3 className="text-center text-[1.8rem] font-medium">
        Please login to use the system
      </h3>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-2 inline-block">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Please input email" }}
          render={({ field }) => (
            <Input {...field} type={"email"} placeholder="Input email" />
          )}
        />
        <p className="text-[1.2rem] text-red-500">{errors?.email?.message}</p>
        <label className="mb-2 inline-block">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{ required: "Please input password" }}
          render={({ field }) => (
            <Input.Password {...field} placeholder="Input password" />
          )}
        />
        <p className="text-[1.2rem] text-red-500">
          {errors?.password?.message}
        </p>
        <button
          className="bg-primary mt-5 w-full cursor-pointer rounded-lg py-2 text-center font-medium text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

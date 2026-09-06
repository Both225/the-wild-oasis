import { useForm } from "react-hook-form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import Spinner from "../../components/ui/Spinner";

import { Button } from "antd";
import { useSignUp } from "./useSignUp";

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { isLoding, signup } = useSignUp();

  const { errors } = formState;

  function onSubmit({ email, password, fullName }) {
    signup({ email, password, fullName }, { onSettled: reset });
  }

  function onError(errors) {
    console.log("Form Validation Errors:", errors);
  }

  if (isLoding) return <Spinner />;

  return (
    <div className="space-y-8">
      <h1 className="text-[2.4rem] font-medium">Create new user</h1>
      <form
        className="flex flex-col space-y-8"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <FormRow
          label={"Full Name"}
          id={"fullName"}
          error={errors?.fullName?.message}
        >
          <Input
            type={"text"}
            id="fullName"
            {...register("fullName", {
              required: "Please input your full name",
            })}
          />
        </FormRow>
        <FormRow label={"Email"} id={"email"} error={errors?.email?.message}>
          <Input
            type={"email"}
            id="email"
            {...register("email", {
              required: "Please input email",
            })}
          />
        </FormRow>
        <FormRow
          label={"Password"}
          id={"password"}
          error={errors?.password?.message}
        >
          <Input
            type={"password"}
            id="password"
            {...register("password", {
              required: "Please input password",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
        </FormRow>
        <FormRow
          label={"Repeat password"}
          id={"repeatPassword"}
          error={errors?.repeatPassword?.message}
        >
          <Input
            type={"password"}
            id="repeatPassword"
            {...register("repeatPassword", {
              required: "Please repeat your password",
              validate: (value) =>
                value === getValues().password || "Password doesn't match ",
            })}
          />
        </FormRow>
        <Button
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "#10b981",
            alignSelf: "center",
            marginRight: "430px",
          }}
          color="blue"
        >
          Create new user
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;

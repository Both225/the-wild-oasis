import { useForm } from "react-hook-form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import Spinner from "../../components/ui/Spinner";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";

function UpdateAccForm() {
  const [updateFullName, setUpdateFullName] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [avatar, setAvatar] = useState("");

  const { isLoading, currentUser } = useCurrentUser();

  const { user_metadata } = currentUser;

  const { register, formState, getValues, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: user_metadata.fullName,
    },
  });

  const { isUpdate, updateUser } = useUpdateUser();

  const { errors } = formState;

  function onSubmitFullName(data) {
    if (!data.fullName) return null;

    updateUser(data);
  }
  function onSubmitPassword(data) {
    if (!data.password) return null;

    updateUser(data);
  }

  function onSubmitAvatar(data) {
    updateUser(data);
  }

  function onError(errors) {
    console.log("Form Validation Errors:", errors);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="space-y-8">
      <h1 className="text-[2.4rem] font-medium">Update account</h1>
      <div className="flex flex-col items-start gap-5 text-[1.8rem] font-medium">
        <button
          className="cursor-pointer"
          onClick={() => setUpdateFullName((prev) => !prev)}
        >
          Update fullname
        </button>
        {updateFullName && (
          <form
            onSubmit={handleSubmit(onSubmitFullName, onError)}
            className="flex flex-col gap-5"
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
            <button
              className="bg-primary mr-[1rem] cursor-pointer self-end rounded-lg px-6 py-2 text-[1.2rem] font-normal text-white"
              type="submit"
            >
              update
            </button>
          </form>
        )}
        <button
          className="cursor-pointer"
          onClick={() => setUpdatePassword((prev) => !prev)}
        >
          Update password
        </button>
        {updatePassword && (
          <form
            onSubmit={handleSubmit(onSubmitPassword)}
            className="flex flex-col gap-5"
          >
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
            <button
              className="bg-primary mr-[1rem] cursor-pointer self-end rounded-lg px-6 py-2 text-[1.2rem] font-normal text-white"
              type="submit"
            >
              update
            </button>
          </form>
        )}
        <FormRow
          label={"Image"}
          id={"password"}
          error={errors?.password?.message}
        >
          <Input
            type="file"
            {...register("avatar")}
            accept={"image/*"}
            onChange={(e) => setAvatar(e.target.files)}
          />
          <button
            className="bg-primary mr-[1rem] cursor-pointer self-end rounded-lg px-6 py-2 text-[1.2rem] font-normal text-white"
            type="submit"
          >
            update
          </button>
        </FormRow>
      </div>
    </div>
  );
}

export default UpdateAccForm;

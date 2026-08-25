import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin } from "../../service/apiCabins";
import toast from "react-hot-toast";

function CreateCabinForm() {
  // React Hook Form
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  // React Query
  const queryClient = useQueryClient();

  const { isLoading: isAdding, mutate } = useMutation({
    mutationFn: (newCabin) => addCabin(newCabin),
    onSuccess: () => {
      toast("Cabin add success");

      queryClient.invalidateQueries("cabins");
      reset();
    },
    onError: (error) => toast(error),
  });

  // React Hook Form Function
  function onSubmit(data) {
    console.log(data);
    mutate({ ...data, image: data.image[0] });
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="bg-surface inline-flex w-full flex-col justify-start gap-8 px-20 py-10"
    >
      <FormRow label={"Name"} id={"name"} error={errors?.name?.message}>
        <Input
          id={"name"}
          type="text"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="Maximum Capacity"
        id={"maxCapacity"}
        error={errors?.maxCapacity?.message}
      >
        <Input
          type={"number"}
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Minimum capicity is 1",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Regular Price"
        id={"regularPrice"}
        error={errors?.regularPrice?.message}
      >
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Discount"
        id={"discount"}
        error={errors?.discount?.message}
      >
        <Input
          type="number"
          id="discount"
          {...register("discount", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Discount should be at least 1",
            },
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>
      <FormRow
        label="Description for cabin"
        id={"description"}
        error={errors?.description?.message}
      >
        <TextArea type="text" id="description" />
      </FormRow>
      <FormRow label="Cabin photo" id={"photo"} error={""}>
        <Input type="file" id="photo" {...register("image")} />
      </FormRow>
      <div className="mr-118 space-x-5 self-center">
        <Button type="reset" variant="outline">
          Cancel
        </Button>
        <Button type="submit" variant="primary" disabled={isAdding}>
          Add
        </Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;

function FormRow({ label, error, id, children }) {
  return (
    <div className="grid grid-cols-[20rem_min-content_1fr] gap-5">
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {error && <p className="font-semibold text-red-500">{error}</p>}
    </div>
  );
}

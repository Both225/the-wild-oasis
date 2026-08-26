import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";

import { editCabin } from "../../service/apiCabins";

function EditCabinForm({ cabinToEdit }) {
  const { id: editId, ...editValue } = cabinToEdit;
  const isEditSession = Boolean(editId);

  // React Hook Form
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  const { errors } = formState;

  // React Query
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate } = useMutation({
    mutationFn: (cabin) => editCabin(cabin),
    onSuccess: () => {
      toast("Cabin edit success");

      queryClient.invalidateQueries("cabins");
      reset();
    },
    onError: (error) => toast(error),
  });

  // React Hook Form Function
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    console.log(data);
    mutate({ ...data, image: image, id: editId });
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
        <Input
          type="file"
          id="photo"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>
      <div className="mr-118 space-x-5 self-center">
        <Button type="reset" variant="outline">
          Cancel
        </Button>
        <Button type="submit" variant="primary" disabled={isEditing}>
          {isEditSession ? "Edit cabin" : "Create cabin"}
        </Button>
      </div>
    </form>
  );
}

export default EditCabinForm;

function FormRow({ label, error, id, children }) {
  return (
    <div className="grid grid-cols-[20rem_min-content_1fr] gap-5">
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {error && <p className="font-semibold text-red-500">{error}</p>}
    </div>
  );
}

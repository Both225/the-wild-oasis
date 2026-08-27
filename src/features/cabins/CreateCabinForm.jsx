import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";

import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";

function CreateCabinForm({ onCloseModal }) {
  // React Hook Form
  const { register, handleSubmit, getValues, formState } = useForm();

  const { isAdding, createCabin } = useCreateCabin();

  const { errors } = formState;

  // React Hook Form Function
  function onSubmit(data) {
    console.log(data);
    createCabin({ ...data, image: data.image[0] });
    onCloseModal();
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="bg-surface flex w-full flex-col justify-start gap-6 px-20"
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
            required: false,
            min: {
              value: 0,
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
      <div className="justify-end gap-3 space-x-5 self-end">
        <Button type="reset" variant="outline" onClick={onCloseModal}>
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

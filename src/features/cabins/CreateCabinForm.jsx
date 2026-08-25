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
    mutate(data);
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="bg-surface grid w-full grid-cols-[30rem_1fr] items-center gap-8 px-20 py-10"
    >
      <Label htmlFor={"name"}>Cabin name</Label>
      <Input
        type={"text"}
        {...register("name", { required: "This field is required" })}
        id={"name"}
      />
      {errors?.name?.message && <p>{errors.name.message}</p>}
      <Label htmlFor={"capacity"}>Maximum Capacity</Label>
      <Input
        type={"number"}
        {...register("maxCapacity", {
          required: "This field is required",
          min: {
            value: 1,
            message: "Capacity must be atleast 1",
          },
        })}
        id={"capacity"}
      />
      {errors?.maxCapacity?.message && <p>{errors.maxCapacity.message}</p>}
      <Label htmlFor={"price"}>Regular Price</Label>
      <Input
        type={"number"}
        {...register("price", {
          required: "This field is required",
          min: {
            value: 1,
            message: "Price must be atleast 1",
          },
        })}
        id={"price"}
      />
      {errors?.price?.message && <p>{errors.price.message}</p>}
      <Label htmlFor={"discount"}>Discount</Label>
      <Input
        type={"number"}
        {...register("discount", {
          required: "This field is required",
          min: {
            value: 1,
            message: "Discount must be atleast 1",
          },
          validate: (value) =>
            Number(value) <= Number(getValues().regularPrice) ||
            "Discount must be less than regular price",
        })}
        id={"discount"}
      />
      {errors?.discount?.message && <p>{errors.discount.message}</p>}
      <Label htmlFor={"description"}>Description for cabin</Label>
      <TextArea
        type={"number"}
        {...register("description", { required: "This field is required" })}
        id={"description"}
      />
      {errors?.description?.message && <p>{errors.description.message}</p>}
      <Label htmlFor={"photo"}>Cabin photo</Label>
      <Input type={"text"} {...register("photo")} id={"photo"} />
      <div className="col-start-2 ml-35 space-x-5 justify-self-start">
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

function FormRow({ label, children, error }) {
  return (
    <div>
      {label && <Label>label</Label>}
      <Input />
    </div>
  );
}

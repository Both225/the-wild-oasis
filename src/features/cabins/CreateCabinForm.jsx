import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import { useForm } from "react-hook-form";

function CreateCabinForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface grid w-full grid-cols-[30rem_1fr] items-center gap-8 px-20 py-10"
    >
      <Label htmlFor={"name"}>Cabin name</Label>
      <Input type={"text"} {...register("name")} id={"name"} />
      <Label htmlFor={"capacity"}>Maximum Capacity</Label>
      <Input type={"number"} {...register("maxCapacity")} id={"capacity"} />
      <Label htmlFor={"price"}>Regular Price</Label>
      <Input type={"number"} {...register("price")} id={"price"} />
      <Label htmlFor={"discount"}>Discount</Label>
      <Input type={"number"} {...register("discount")} id={"discount"} />
      <Label htmlFor={"description"}>Description for cabin</Label>
      <TextArea
        type={"number"}
        {...register("description")}
        id={"description"}
      />
      <Label htmlFor={"photo"}>Cabin photo</Label>
      <Input type={"text"} {...register("photo")} id={"photo"} />
      <div className="col-start-2 ml-35 space-x-5 justify-self-start">
        <Button type="reset" variant="outline">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Add
        </Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;

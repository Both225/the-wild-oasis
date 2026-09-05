import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useSetting } from "./useSetting";
import { useForm } from "react-hook-form";
import { useUpdateSetting } from "./useUpdateSetting";
import Spinner from "../../components/ui/Spinner";

function SettingPage() {
  const { isLoading, setting = [] } = useSetting();
  const { isUpdating, updateSetting } = useUpdateSetting();

  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: setting[0],
  });

  const { errors } = formState;

  function onSubmit(data) {
    updateSetting(data);
  }

  function onError(error) {
    console.log(error);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-surface-darker h-full w-full px-12 py-10">
      <div className="bg-surface h-full space-y-10 rounded-lg px-10 py-7">
        <h1 className="text-5xl font-semibold">Update cabin settings</h1>
        <div className="bg-surface inline-flex w-full flex-col justify-start gap-8 px-20 py-10">
          <form
            className="space-y-10"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <FormRow
              label={"Minimum nights/booking"}
              id={"minimumNights"}
              error={errors?.minBookingLength?.message}
            >
              <Input
                type="number"
                id={"minimumNights"}
                {...register("minBookingLength", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "Minimum value is 1",
                  },
                })}
              />
            </FormRow>
            <FormRow
              label={"Maximum nights/booking"}
              id={"maximumNights"}
              error={errors?.maxBookingLength?.message}
            >
              <Input
                type="number"
                id="maximumNights"
                {...register("maxBookingLength", {
                  required: "This field is required",
                  validate: (value) =>
                    Number(value) > Number(getValues().minBookingLength) ||
                    "Maximum booking nights should be more than 1",
                })}
              />
            </FormRow>
            <FormRow
              label={"Maximum guests/booking"}
              id={"maximumGuests"}
              error={errors?.maxGuestPerCabin?.message}
            >
              <Input
                type="number"
                id="maximumGuests"
                {...register("maxGuestPerCabin", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "Maximum guest should be more than 1",
                  },
                })}
              />
            </FormRow>
            <FormRow
              label={"Breakfast"}
              id="breakfastPrice"
              error={errors?.breakfastPrice?.message}
            >
              <Input
                type="number"
                id="breakfastPrice"
                {...register("breakfastPrice", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "Breakfast price should be more than 1",
                  },
                })}
              />
            </FormRow>
            <div>
              <Button disabled={isUpdating} type="submit">
                Change setting
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;

function FormRow({ label, error, id, children }) {
  return (
    <div className="grid grid-cols-[20rem_min-content_1fr] gap-5">
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {error && <p className="font-semibold text-red-500">{error}</p>}
    </div>
  );
}

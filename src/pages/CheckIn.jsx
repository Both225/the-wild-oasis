import { useNavigate } from "react-router-dom";
import Status from "../components/ui/Status";
import { Button } from "antd";
import { HiArrowLeft, HiFlag, HiOutlineHome } from "react-icons/hi";
import { useBooking } from "../features/bookings/useBooking";
import Spinner from "../components/ui/Spinner";
import { Checkbox } from "antd";
import { useBookingUpdate } from "../features/bookings/useBookingPayment";
import { useState } from "react";
import { formatCurrency } from "../helper/format";
import { useSetting } from "../features/setting/useSetting";
import { useCheckIn } from "../features/check-in-out/useCheckIn";

function CheckIn() {
  return (
    <div className="bg-surface-darker h-full w-full px-18 py-10">
      <div className="bg-surface space-y-10 rounded-lg pt-7">
        <CheckInContainer />
      </div>
    </div>
  );
}

export default CheckIn;

function CheckInContainer() {
  const { booking, isLoading } = useBooking();
  const { isLoading: isLoadingSetting, setting } = useSetting();
  const { isUpdating: isUpdateCheckIn, updateCheckIn } = useCheckIn();

  const [addBreakfast, setAddBreakfast] = useState(false);
  const [checkIn, setCheckIn] = useState(false);

  const navigate = useNavigate();

  if (isLoading || isUpdateCheckIn || isLoadingSetting) return <Spinner />;

  const {
    id: bookingId,
    startDate,
    endDate,
    cabinPrice,
    extrasPrice,
    totalPrice,
    status,
    hasBreakfast,
    isPaid,
    numNights,
    cabinId,
    numGuests,
    guestId: guest,
    created_at,
  } = booking || {};

  const { breakfastPrice } = setting;

  const optionalBreakfast = breakfastPrice * numGuests * numNights;

  function onConfirmPayment() {
    setCheckIn((prev) => !prev);
  }

  function onCheckIn() {
    updateCheckIn({
      bookingId,
      breakfast: {
        hasBreakfast: addBreakfast,
        extrasPrice: optionalBreakfast,
        totalPrice: cabinPrice + optionalBreakfast,
      },
    });
    navigate("/bookings?status=unconfirmed&page=0");
  }

  function onAddBreakfast() {
    setAddBreakfast((prev) => !prev);
  }

  return (
    <section className="flex flex-col pb-10">
      <header className="flex items-center justify-between space-y-10 px-10">
        <div className="flex items-center gap-10">
          <h1 className="text-[2.4rem] font-bold">
            Check In <span>#{bookingId}</span>
          </h1>
          <Status status={status} />
        </div>
        <Button
          type="link"
          icon={<HiArrowLeft />}
          style={{ fontWeight: "600" }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </header>
      <div className="bg-primary flex justify-between px-10 py-8 font-semibold text-white">
        <div className="flex items-center gap-5">
          <HiOutlineHome color="white" size={28} />
          <p>
            <span>{numNights}</span> nights in cabin{" "}
            <span>{cabinId?.name}</span>
          </p>
        </div>
        <p>
          <span>{startDate} (in month)</span> - <span>{endDate}</span>
        </p>
      </div>
      <div className="space-y-12 px-10 py-8 pb-2">
        <div className="flex items-center gap-25 font-medium">
          <p>
            <span className="mr-4">
              <HiFlag style={{ display: "inline-block" }} color="#10b981" />
            </span>
            {guest?.fullName}
          </p>
          <p className="text-gray-500">{guest?.email}</p>
          <p className="text-gray-500">National ID 12345678910</p>
        </div>
        <p className="font-medium">
          Breakfast include?{" "}
          <span className="ml-5 font-normal">
            {addBreakfast ? "yes" : "no"}
          </span>
        </p>
        <div className="flex gap-10">
          <p>Guest {numGuests}</p>
          <p>Night {numNights}</p>
        </div>
        <div
          className={`flex justify-between rounded-md ${isPaid ? "bg-primary/80 text-white" : "bg-yellow-200 text-yellow-700"} px-10 py-10 font-semibold`}
        >
          <p>
            Total price{" "}
            {formatCurrency(
              addBreakfast
                ? cabinPrice + optionalBreakfast
                : cabinPrice + extrasPrice,
            )}{" "}
            {addBreakfast
              ? `(${formatCurrency(cabinPrice)} cabin + ${formatCurrency(optionalBreakfast)} breakfast)`
              : `cabin`}
          </p>
          <p className="uppercase">
            {isPaid ? "Already paid" : "will paid at property"}
          </p>
        </div>
        <p className="text-end">Booked {created_at?.split("T")[0]}</p>
      </div>
      <div className="flex flex-col gap-5 px-10">
        <Checkbox
          onChange={onAddBreakfast}
          checked={addBreakfast}
          disabled={hasBreakfast}
        >
          Want to add breakfast for {formatCurrency(optionalBreakfast)} (
          {formatCurrency(breakfastPrice)} per person)
        </Checkbox>
        <Checkbox onChange={onConfirmPayment}>
          I confirm that {guest?.fullName} have paid the total amount
        </Checkbox>
      </div>
      <div className="flex justify-end gap-5 pr-10">
        <Button
          type="primary"
          style={{ backgroundColor: "#10b981" }}
          disabled={!checkIn}
          onClick={onCheckIn}
        >
          Check In
        </Button>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </section>
  );
}

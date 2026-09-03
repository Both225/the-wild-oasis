import { useNavigate } from "react-router-dom";
import Status from "../components/ui/Status";
import { Button } from "antd";
import { HiArrowLeft, HiFlag, HiOutlineHome } from "react-icons/hi";
import { useBooking } from "../features/bookings/useBooking";
import Spinner from "../components/ui/Spinner";
import { Checkbox } from "antd";
import { useBookingUpdate } from "../features/bookings/useBookingPayment";

function CheckIn() {
  const { booking, isLoading } = useBooking();
  const { isUpdating, updateBooking } = useBookingUpdate();
  const navigate = useNavigate();

  if (isLoading) <Spinner />;

  if (isUpdating) <Spinner />;

  const {
    id,
    startDate,
    endDate,
    cabinPrice: rawCabinPrice,
    extrasPrice: rawExtrasPrice,
    totalPrice: rawTotalPrice,
    status,
    hasBreakfast: rawHasBreakfast,
    isPaid,
    obeservation,
    numNights,
    cabinId,
    guestId: guest,
    created_at,
  } = booking || {};

  const cabinPrice = rawCabinPrice ?? 180;
  const extrasPrice = rawExtrasPrice ?? 60;
  const totalPrice = rawTotalPrice ?? cabinPrice + extrasPrice;

  const hasBreakfast = rawHasBreakfast ? "yes" : "no";

  function onCheckPayment() {
    updateBooking({ id: id, field: "isPaid", value: true });
  }

  function onCheckIn() {
    updateBooking({ id: id, field: "status", value: "check in" });
    navigate(-1);
  }

  return (
    <section className="flex flex-col pb-10">
      <header className="flex items-center justify-between space-y-10 px-10">
        <div className="flex items-center gap-10">
          <h1 className="text-[2.4rem] font-bold">
            Booking <span>#{id}</span>
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
      <div className="space-y-12 px-10 py-8">
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
          <span className="ml-5 font-normal">{hasBreakfast}</span>
        </p>
        <div
          className={`flex justify-between rounded-md ${isPaid ? "bg-primary/80 text-white" : "bg-yellow-200 text-yellow-700"} px-10 py-10 font-semibold`}
        >
          <p>
            Total price {totalPrice} ({cabinPrice} cabin + {extrasPrice}
            breakfast){" "}
          </p>
          <p className="uppercase">
            {isPaid ? "Already paid" : "will paid at property"}
          </p>
        </div>
        <p className="text-end">Booked {created_at?.split("T")[0]}</p>
      </div>
      <div className="flex items-center justify-between px-10">
        <Checkbox onChange={onCheckPayment} checked={isPaid} disabled={isPaid}>
          I confirm that {guest?.fullName} have paid the total amount
        </Checkbox>
        <div className="flex gap-5">
          <Button
            type="primary"
            style={{ backgroundColor: "#10b981" }}
            disabled={!isPaid}
            onClick={onCheckIn}
          >
            Check In
          </Button>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>
    </section>
  );
}

export default CheckIn;

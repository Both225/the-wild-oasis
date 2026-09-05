import { Button } from "antd";
import { HiArrowLeft, HiFlag, HiOutlineHome } from "react-icons/hi";
import Status from "../components/ui/Status";
import { useBooking } from "../features/bookings/useBooking";
import Spinner from "../components/ui/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrency } from "../helper/format";

function BookingDetail() {
  const { booking, isLoading } = useBooking();

  if (isLoading) return <Spinner />;

  if (!booking) return <Spinner />;

  return (
    <div className="bg-surface-darker h-full w-full px-18 py-10">
      <div className="bg-surface space-y-10 rounded-lg pt-7">
        <DetailContainer booking={booking} />
      </div>
    </div>
  );
}

function DetailContainer({ booking }) {
  const navigate = useNavigate();
  const { bookingId } = useParams();

  const {
    id,
    startDate,
    endDate,
    cabinPrice,
    extrasPrice,
    status,
    hasBreakfast,
    isPaid,
    numNights,
    cabinId,
    numGuests,
    guestId: guest,
    created_at,
  } = booking;

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
            <span>{numNights}</span> nights in cabin <span>{cabinId.name}</span>
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
            {guest.fullName}
          </p>
          <p className="text-gray-500">{guest.email}</p>
          <p className="text-gray-500">National ID 12345678910</p>
        </div>
        <p className="font-medium">
          Breakfast include?{" "}
          <span className="ml-5 font-normal">
            {hasBreakfast ? "yes" : "no"}{" "}
          </span>
        </p>
        <p>Guests : {numGuests}</p>
        <div
          className={`flex justify-between rounded-md ${isPaid ? "bg-primary/80 text-white" : "bg-yellow-200 text-yellow-700"} px-10 py-10 font-semibold`}
        >
          <p>
            Total price {formatCurrency(cabinPrice + extrasPrice)}{" "}
            {hasBreakfast ? "" : "cabin"}{" "}
          </p>
          <p className="uppercase">
            {isPaid ? "already paid" : "will paid at property"}
          </p>
        </div>
        <p className="text-end">Booked {created_at?.split("T")[0]}</p>
      </div>
      {status === "unconfirmed" && (
        <Button
          style={{
            backgroundColor: "#10b981",
            width: "fit-content",
            alignSelf: "end",
            marginRight: "3rem",
          }}
          type="primary"
          onClick={() => navigate(`/check-in/${bookingId}`)}
        >
          Check In
        </Button>
      )}
    </section>
  );
}

export default BookingDetail;

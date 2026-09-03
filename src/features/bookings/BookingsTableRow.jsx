import { useNavigate } from "react-router-dom";
import ActionDropDown from "../../components/ui/ActionDropDown";
import Status from "../../components/ui/Status";
import { bookDate, daysAgo } from "../../helper/format";
import { useBookingStatus } from "./useBookingStatus";
import Spinner from "../../components/ui/Spinner";
import { updateStatus } from "../../service/apiBookings";

function BookingsTableRow({ booking }) {
  const navigate = useNavigate();
  const { isUpdating, updateStatus } = useBookingStatus();

  if (isUpdating) return <Spinner />;

  const {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    status,
    totalPrice,
    numNights,
    guestId: { fullName, email },
  } = booking;

  // Date Format
  const days = daysAgo(bookDate(created_at));

  // Dropdown options
  const dropdownOptions = [
    { key: `detail-${bookingId}`, label: "Detail" },
    {
      key: `check-in-${bookingId}`,
      label: "Check In",
    },
    {
      key: `check-out-${bookingId}`,
      label: "Check Out",
    },
  ];

  const handleMenuClick = async (e) => {
    // e.key will be something like "detail-123" or "check-in-123"
    if (e.key.startsWith("detail-")) {
      const bookingId = e.key.replace("detail-", "");
      navigate(`/bookings/${bookingId}`);
    }
    if (e.key.startsWith("check-in-")) {
      const bookingId = e.key.replace("check-in-", "");

      updateStatus({ id: bookingId, status: "check in" });
    }
    if (e.key.startsWith("check-out-")) {
      const bookingId = e.key.replace("check-out-", "");

      updateStatus({ id: bookingId, status: "check out" });
    }
  };

  return (
    <>
      <div className="grid grid-cols-[10rem_1fr_1fr_1fr_14rem_min-content] items-center justify-center gap-10">
        <p>{bookingId}</p>
        <div>
          <p className="font-medium">{fullName}</p>
          <p className="text-[1.2rem] font-medium text-gray-500">{email}</p>
        </div>
        <div>
          <p className="font-medium">
            {days === 0 ? "Today" : `${days} days ago`} - {numNights} nights to
            stay
          </p>
          <p className="text-[1.2rem] font-medium text-gray-500">
            {startDate} - {endDate}
          </p>
        </div>
        <Status status={status} />
        <p className="text-primary text-center font-semibold">{totalPrice}$</p>
        <ActionDropDown
          items={
            status === "unconfirmed"
              ? dropdownOptions
              : status === "check in"
                ? [dropdownOptions[2]]
                : [dropdownOptions[0]]
          }
          handleMenuClick={handleMenuClick}
        />
      </div>
    </>
  );
}

export default BookingsTableRow;

import Status from "../../components/ui/Status";
import { differenceInDays, format, parseISO } from "date-fns";

function BookingsTableRow({ booking }) {
  const {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    status,
    totalPrice,
    guestId: { fullName, email },
  } = booking;
  const bookDate = format(parseISO(created_at), "yyyy-MM-dd");

  const daysAgo = differenceInDays(new Date(), new Date(bookDate));

  const nightsToStay = differenceInDays(new Date(endDate), new Date(startDate));

  return (
    <>
      <div className="grid grid-cols-[10rem_1fr_1fr_1fr_14rem] items-center justify-center gap-10">
        <p>{bookingId}</p>
        <div>
          <p className="font-medium">{fullName}</p>
          <p className="text-[1.2rem] font-medium text-gray-500">{email}</p>
        </div>
        <div>
          <p className="font-medium">
            {daysAgo === 0 ? "Today" : `${daysAgo} days ago`} - {nightsToStay}{" "}
            nights stay
          </p>
          <p className="text-[1.2rem] font-medium text-gray-500">
            {startDate} - {endDate}
          </p>
        </div>
        <Status status={status} />
        <p className="font-semibold">{totalPrice}$</p>
      </div>
    </>
  );
}

export default BookingsTableRow;

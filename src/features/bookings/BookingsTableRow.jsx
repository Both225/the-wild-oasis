import ActionDropDown from "../../components/ui/ActionDropDown";
import Status from "../../components/ui/Status";
import { differenceInDays, format, parseISO } from "date-fns";

function BookingsTableRow({ booking }) {
  const {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    status,
    totalPrice,
    guestId: { fullName, email },
  } = booking;

  // Calculate days
  const bookDate = format(parseISO(created_at), "yyyy-MM-dd");

  const daysAgo = differenceInDays(new Date(), new Date(bookDate));

  const nightsToStay = differenceInDays(new Date(endDate), new Date(startDate));

  const dropdownOptions = [{ value: "detail", label: "Detail" }];

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
            {daysAgo === 0 ? "Today" : `${daysAgo} days ago`} - {nightsToStay}{" "}
            nights stay
          </p>
          <p className="text-[1.2rem] font-medium text-gray-500">
            {startDate} - {endDate}
          </p>
        </div>
        <Status status={status} />
        <p className="text-primary text-center font-semibold">{totalPrice}$</p>
        <ActionDropDown items={dropdownOptions} handleMenuClick={() => {}} />
      </div>
    </>
  );
}

export default BookingsTableRow;

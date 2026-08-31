import Pagination from "../../components/ui/Pagination";
import Spinner from "../../components/ui/Spinner";
import BookingsHeader from "./BookingsHeader";
import BookingsTable from "./BookingsTable";
import BookingsTableHeader from "./BookingsTableHeader";
import BookingsTableRow from "./BookingsTableRow";
import { useBooking } from "./useBookings";

function BookingPage() {
  const { bookings, count, page, isLoading } = useBooking();

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-surface-darker h-full w-full px-18 py-10">
      <div className="bg-surface space-y-10 rounded-lg px-10 py-7">
        <BookingsHeader />
        <BookingsTable>
          <BookingsTableHeader />
          {bookings?.map((booking) => (
            <BookingsTableRow booking={booking} key={booking.id} />
          ))}
        </BookingsTable>
        <Pagination count={count} page={page} />
      </div>
    </div>
  );
}

export default BookingPage;

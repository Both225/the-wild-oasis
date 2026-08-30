import Filter from "../../components/ui/Filter";
import OperationalTable from "../../components/ui/OperationalTable";
import SortBy from "../../components/ui/SortBy";

function BookingsHeader() {
  const filterOptions = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "check in",
      label: "Check In",
    },
    {
      value: "check out",
      label: "Check Out",
    },
    {
      value: "unconfirmed",
      label: "Unconfirmed",
    },
  ];

  const sortOptions = [
    { value: "totalPrice-asc", label: "Sort By Price (low to high)" },
    { value: "totalPrice-desc", label: "Sort By Price (high to low)" },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-[2.4rem] font-semibold">All Bookings</h1>
      <OperationalTable>
        <Filter options={filterOptions} filterField={"status"} />
        <SortBy options={sortOptions} />
      </OperationalTable>
    </div>
  );
}

export default BookingsHeader;

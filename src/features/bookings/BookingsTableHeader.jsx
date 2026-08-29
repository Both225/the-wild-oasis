function BookingsTableHeader() {
  return (
    <div className="grid grid-cols-[10rem_1fr_1fr_1fr_14rem] justify-center gap-10 font-medium">
      <p>Cabin</p>
      <p>Guest</p>
      <p>Dates</p>
      <p className="text-center">Status</p>
      <p className="text-center">Amount</p>
    </div>
  );
}

export default BookingsTableHeader;

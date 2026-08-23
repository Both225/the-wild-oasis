function TableHeader() {
  return (
    <div className="grid grid-cols-[10rem_1fr_1fr_repeat(3,_14rem)] justify-center gap-10">
      <p>Image</p>
      <p>Cabin</p>
      <p>Capacity</p>
      <p>Price</p>
      <p>Discount</p>
      <p>Action</p>
    </div>
  );
}

export default TableHeader;

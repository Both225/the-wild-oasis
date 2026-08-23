function TableRow() {
  return (
    <div className="grid grid-cols-[10rem_1fr_1fr_repeat(3,_14rem)] items-center justify-center gap-10">
      <img
        className="h-25 w-35"
        src="./public/assets/images/cabins/cabin-1.jpg"
        alt="cabin's image"
      />
      <p>001</p>
      <p>3</p>
      <p>250</p>
      <p>30</p>
      <p>Delete</p>
    </div>
  );
}

export default TableRow;

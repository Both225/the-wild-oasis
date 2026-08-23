function CabinHeader() {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-[2.4rem] font-semibold">All cabins</h1>
      <div>
        <button className="cursor-pointer">Filter</button>
        <span> / </span>
        <button className="cursor-pointer">Sort</button>
      </div>
    </div>
  );
}

export default CabinHeader;

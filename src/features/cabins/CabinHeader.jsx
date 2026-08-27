import CabinOperationTable from "./CabinOperationTable";

function CabinHeader() {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-[2.4rem] font-semibold">All cabins</h1>
      <CabinOperationTable />
    </div>
  );
}

export default CabinHeader;

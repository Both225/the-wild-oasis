import SortBy from "../../components/ui/SortBy";
import CabinOperationTable from "./CabinOperationTable";

function CabinHeader() {
  const sortOptions = [
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-desc", label: "Sort by name (Z-A)" },
    { value: "regularPrice-asc", label: "Sort by price (low first)" },
    { value: "regularPrice-desc", label: "Sort by price (high first)" },
    { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
    { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-[2.4rem] font-semibold">All cabins</h1>
      <div className="flex items-center gap-5">
        <CabinOperationTable />
        <SortBy options={sortOptions} />
      </div>
    </div>
  );
}

export default CabinHeader;

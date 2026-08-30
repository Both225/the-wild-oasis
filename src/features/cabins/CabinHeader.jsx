import SortBy from "../../components/ui/SortBy";
import OperationalTable from "../../components/ui/OperationalTable";
import Filter from "../../components/ui/Filter";

function CabinHeader() {
  const sortOptions = [
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-desc", label: "Sort by name (Z-A)" },
    { value: "regularPrice-asc", label: "Sort by price (low first)" },
    { value: "regularPrice-desc", label: "Sort by price (high first)" },
    { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
    { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
  ];

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No-discount" },
    { value: "with-discount", label: "With-Discount" },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-[2.4rem] font-semibold">All cabins</h1>
      <OperationalTable>
        <Filter filterField="discount" options={filterOptions} />
        <SortBy options={sortOptions} />;
      </OperationalTable>
    </div>
  );
}

export default CabinHeader;

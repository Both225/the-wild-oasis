import { useSearchParams } from "react-router-dom";
import FilterButton from "../../components/ui/FilterButton";

function CabinOperationTable() {
  const options = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No-discount" },
    { value: "with-discount", label: "With-discount" },
  ];

  return <Filter filterField={"discount"} options={options} />;
}

export default CabinOperationTable;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleFilterOption(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="space-x-5 shadow-sm">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleFilterOption(option.value)}
          isActive={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

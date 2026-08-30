import { useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleFilterOption(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="h-full space-x-5 shadow-sm">
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

export default Filter;

import Filter from "../../components/ui/Filter";

function CabinOperationTable() {
  const options = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No-discount" },
    { value: "with-discount", label: "With-discount" },
  ];

  return <Filter filterField={"discount"} options={options} />;
}

export default CabinOperationTable;

import { useQuery } from "@tanstack/react-query";
import { getCabin } from "../../service/apiCabins";
import CabinHeader from "./CabinHeader";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CabinTable from "./CabinTable";

function CabinPage() {
  const {
    isLoading,
    data: cabin,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabin,
  });

  return (
    <div className="bg-surface-darker h-full w-full px-18 py-10">
      <CabinHeader />
      <CabinTable>
        <TableHeader />
        <TableRow />
        <TableRow />
      </CabinTable>
    </div>
  );
}

export default CabinPage;

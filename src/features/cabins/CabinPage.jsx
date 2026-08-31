import { useCabins } from "./useCabins";

import CabinHeader from "./CabinHeader";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CabinTable from "./CabinTable";
import AddCabin from "./AddCabin";
import Spinner from "../../components/ui/Spinner";

function CabinPage() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-surface-darker h-full w-full px-18 py-10">
      <div className="bg-surface space-y-10 rounded-lg px-10 py-7">
        <CabinHeader />
        <CabinTable>
          <TableHeader />
          {cabins.map((cabin) => (
            <TableRow key={cabin.id} cabin={cabin} />
          ))}
        </CabinTable>
        <AddCabin />
      </div>
    </div>
  );
}

export default CabinPage;

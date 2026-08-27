import { useCabins } from "./useCabins";
import { useState } from "react";

import CabinHeader from "./CabinHeader";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../components/ui/Button";
import AddCabin from "./AddCabin";

function CabinPage() {
  const { isLoading, cabins } = useCabins();

  return (
    <div className="bg-surface-darker h-full w-full px-18 py-10">
      {isLoading ? (
        <p className="flex h-full w-full items-center justify-center text-[3.6rem]">
          Loading...
        </p>
      ) : (
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
      )}
    </div>
  );
}

export default CabinPage;

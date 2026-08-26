import { useQuery } from "@tanstack/react-query";
import { getCabin } from "../../service/apiCabins";
import CabinHeader from "./CabinHeader";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import Button from "../../components/ui/Button";

function CabinPage() {
  const [isCreateCabin, setIsCreateCabin] = useState(false);

  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabin,
  });

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
          <Button
            className={"w-[20rem]"}
            onClick={() => {
              setIsCreateCabin(!isCreateCabin);
            }}
            variant={isCreateCabin ? "danger" : "primary"}
          >
            {isCreateCabin ? "Close" : "Add Cabin"}
          </Button>
          {isCreateCabin && (
            <div className="mt-10">
              <CreateCabinForm />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CabinPage;

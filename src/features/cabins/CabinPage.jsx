import { useQuery } from "@tanstack/react-query";
import { getCabin } from "../../service/apiCabins";
import CabinHeader from "./CabinHeader";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import CabinTable from "./CabinTable";
import Input from "../../components/ui/Input";

function CabinPage() {
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
        <div>
          <CabinHeader />
          <CabinTable>
            <TableHeader />
            {cabins.map((cabin) => (
              <TableRow key={cabin.id} cabin={cabin} />
            ))}
          </CabinTable>
          <Input placeholder={"Input your name"} />
        </div>
      )}
    </div>
  );
}

export default CabinPage;

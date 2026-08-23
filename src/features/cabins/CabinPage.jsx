import { useEffect } from "react";
import { fetchCabin } from "../../service/apiCabins";

function CabinPage() {
  useEffect(() => {
    const getCabin = async () => {
      const data = await fetchCabin();
      console.log(data);
    };

    getCabin();
  }, []);

  return (
    <div className="bg-surface-darker h-full w-full px-12 py-10">
      Cabin Page
      <img src="https://aeredkmacmcilqtntrls.supabase.co/storage/v1/object/public/cabins/1.jpg" />
    </div>
  );
}

export default CabinPage;

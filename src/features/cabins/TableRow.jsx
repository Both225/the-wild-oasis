import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../service/apiCabins";
import toast from "react-hot-toast";

function TableRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  const queryClient = useQueryClient(); // hook to use queryClient

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast("Cabin delete success");

      queryClient.invalidateQueries("cabins"); // make queryClient refetch after delete data by telling which query is invalid "cabins" queryKey
    },
    onError: (error) => toast(error),
  });

  return (
    <div className="grid grid-cols-[10rem_1fr_1fr_repeat(3,_14rem)] items-center justify-center gap-10">
      <img className="h-25 w-35" src={image} alt={name} />
      <p>{name}</p>
      <p>{maxCapacity}</p>
      <p>{regularPrice}</p>
      <p>{discount}</p>
      <button
        onClick={() => {
          mutate(cabinId);
        }}
        disabled={isDeleting}
      >
        Delete
      </button>
    </div>
  );
}

export default TableRow;

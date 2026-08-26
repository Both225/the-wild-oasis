import { useDeleteCabin } from "./useDeleteCabin";
import { useState } from "react";

import Button from "../../components/ui/Button";
import EditCabinForm from "./EditCabinForm";

function TableRow({ cabin }) {
  const [isEdit, setIsEdit] = useState(false);

  const { isDeleting, deleteCabin } = useDeleteCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  return (
    <>
      <div className="grid grid-cols-[10rem_1fr_1fr_repeat(3,_14rem)] items-center justify-center gap-10">
        <img className="h-25 w-35" src={image} alt={name} />
        <p className="font-semibold">{name}</p>
        <p>Fits up to {maxCapacity} guests</p>
        <p className="font-semibold">{regularPrice}$</p>
        <p className="text-primary font-semibold">{discount}$</p>
        <div className="space-x-5">
          <Button onClick={() => setIsEdit((isEdit) => !isEdit)}>Edit</Button>
          <Button
            onClick={() => deleteCabin(cabinId)}
            className={"w-20"}
            variant="danger"
            disabled={isDeleting}
          >
            Delete
          </Button>
        </div>
      </div>
      {isEdit && <EditCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default TableRow;

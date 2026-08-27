import { useState } from "react";

import Button from "../../components/ui/Button";
import EditCabinForm from "./EditCabinForm";
import Modal from "../../components/ui/Modal";
import DeleteForm from "./DeleteForm";

function TableRow({ cabin }) {
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
          <Modal>
            <Modal.Open opens="edit-cabin-form">
              <Button>Edit</Button>
            </Modal.Open>
            <Modal.Window name={"edit-cabin-form"}>
              <EditCabinForm cabinToEdit={cabin} onCloseModal={close} />
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.Open opens="delete-cabin">
              <Button variant="danger">Delete</Button>
            </Modal.Open>
            <Modal.Window name="delete-cabin" title="Delete Cabin">
              <DeleteForm cabinId={cabinId} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default TableRow;

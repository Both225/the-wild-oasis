import { useState } from "react";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button
        className={"w-[20rem]"}
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        Add Cabin
      </Button>
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(!isOpenModal)}
        >
          <CreateCabinForm onCloseModal={() => setIsOpenModal(!isOpenModal)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;

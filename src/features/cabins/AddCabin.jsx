import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import EditCabinForm from "./EditCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm onCloseModal={close} />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button
//         className={"w-[20rem]"}
//         onClick={() => setIsOpenModal(!isOpenModal)}
//       >
//         Add Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal
//           isOpen={isOpenModal}
//           onClose={() => setIsOpenModal(!isOpenModal)}
//         >
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(!isOpenModal)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;

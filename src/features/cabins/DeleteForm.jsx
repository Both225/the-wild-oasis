import Button from "../../components/ui/Button";
import { useDeleteCabin } from "./useDeleteCabin";

function DeleteForm({ cabinId, onClosingModal }) {
  const { deleteCabin } = useDeleteCabin();

  return (
    <div>
      <p>
        Are you sure want to delete this cabin permanently? This action cannot
        be undone
      </p>
      <div className="mt-5 flex justify-end space-x-5">
        <Button variant="outline" onClick={onClosingModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCabin(cabinId)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default DeleteForm;

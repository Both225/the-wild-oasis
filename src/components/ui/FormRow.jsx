import Label from "./Label";

function FormRow({ label, error, id, children }) {
  return (
    <div className="grid grid-cols-[20rem_min-content_1fr] gap-5">
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {error && <p className="font-semibold text-red-500">{error}</p>}
    </div>
  );
}

export default FormRow;

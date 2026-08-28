function Select({ options, onChange }) {
  return (
    <select
      onChange={onChange}
      className="rounded-md border border-gray-300 px-5 py-2 text-[1.4rem]"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;

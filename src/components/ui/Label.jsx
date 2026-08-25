function Label({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="inline-block text-[1.4rem] font-semibold"
    >
      {children}
    </label>
  );
}

export default Label;

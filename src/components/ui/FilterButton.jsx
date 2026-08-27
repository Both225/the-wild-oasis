function FilterButton({ onClick, children, isActive }) {
  return (
    <button
      type="button"
      className={`${isActive ? "bg-primary" : ""} hover:bg-primary/80 active:bg-primary/90 cursor-pointer rounded-md px-8 py-1 text-[1.4rem] font-semibold transition-all duration-200 hover:text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FilterButton;

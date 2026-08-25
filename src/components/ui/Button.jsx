function Button({
  children,
  type = "button",
  onClick,
  size = "md",
  variant = "primary",
  disabled = false,
  className,
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 focus:outline-none focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[1rem] gap-1.5",
    md: "px-4 py-2 text-[1.2rem] gap-2",
    lg: "px-5 py-2.5 text-[1.4rem] gap-2.5",
  };

  const combinedClasses = `${className} ${sizes[size]} ${variants[variant]} ${baseClasses}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

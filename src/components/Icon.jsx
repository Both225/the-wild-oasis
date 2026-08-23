function Icon({ icon, color, size = "md", className }) {
  const cusomize = className;

  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const combinedClasses = `${cusomize} ${sizes[size]}`;

  return (
    <svg fill={color} className={combinedClasses}>
      <use href={`./public/assets/icons/sprite.svg#icon-${icon}`}></use>
    </svg>
  );
}

export default Icon;

import React from "react";

export const TextArea = React.forwardRef(
  ({ id, placeholder, rows = 3, className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={`focus:border-primary focus:ring-primary/20 w-[20rem] rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-[1.2rem] text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 dark:border-gray-700 dark:text-gray-100 dark:focus:ring-blue-400/20 ${className}`}
        {...props}
      />
    );
  },
);

export default TextArea;

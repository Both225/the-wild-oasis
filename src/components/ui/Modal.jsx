import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  // Close on Escape key & disable background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Box */}
      <div className="max-w-[] relative z-10 flex max-h-[90vh] w-fit flex-col rounded-2xl bg-white shadow-2xl transition-all dark:bg-gray-800">
        {/* Header (Fixed at top) */}
        <div className="flex items-center justify-end px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-6">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

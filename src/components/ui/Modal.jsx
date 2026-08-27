import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = (name) => setOpenName(name);

  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, title = "" }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={close}
      />

      {/* Modal Dialog Box */}
      <div className="max-w-[] relative z-10 flex max-h-[90vh] w-fit flex-col rounded-2xl bg-white shadow-2xl transition-all dark:bg-gray-800">
        {/* Header (Fixed at top) */}
        <div className="flex items-center justify-between px-6 pt-4">
          <p className="text-[1.8rem] font-semibold">{title}</p>
          <button
            onClick={close}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-6">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

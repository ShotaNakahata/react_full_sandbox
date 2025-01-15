import { useEffect } from 'react';
import { forwardRef, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children, open }, ref) {
  const dialog = useRef();

  useEffect(() => {
    if (open && !dialog.current.open) {
      dialog.current.showModal();
    } else if (!open && dialog.current.open) {
      dialog.current.close();
    }
  }, [open]);


  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;

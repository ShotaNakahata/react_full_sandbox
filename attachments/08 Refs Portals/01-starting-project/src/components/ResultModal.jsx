import React, { useImperativeHandle, useRef } from "react";
import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialogRef = useRef();

  useImperativeHandle(ref, ()=>({
    open: () => dialogRef.current.showModal(),
  }));
  return (
    <dialog className="result-modal" ref={dialogRef}>
      <h2>You {result}</h2>
      <p>
        The target time is <strong>{targetTime} second</strong>
      </p>
      <p>
        You stoped the timer with <strong> X second left .</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

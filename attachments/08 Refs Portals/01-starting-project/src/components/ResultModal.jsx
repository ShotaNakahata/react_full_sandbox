import React, { useImperativeHandle, useRef } from "react";
import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timerRemaining ,reset},
  ref
) {
  const dialogRef = useRef();
  const result = timerRemaining <= 0 ? "lose" : "win";
  const formattedTimerRemaining = (timerRemaining / 1000).toFixed(2);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(),
  }));
  return (
    <dialog className="result-modal" ref={dialogRef}>
      <h2>You {result}</h2>
      <p>
        The target time is <strong>{targetTime} second</strong>
      </p>
      <p>
        You stoped the timer with <strong> {formattedTimerRemaining} second left .</strong>
      </p>
      <form method="dialog" onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

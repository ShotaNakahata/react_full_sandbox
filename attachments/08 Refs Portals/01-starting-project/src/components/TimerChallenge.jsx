import React, { useRef, useState } from "react";
import ResultModal from "../components/ResultModal";

function TimerChallenge({ title, targetTime }) {
  // const [timerExpired, settimerExpired] = useState(false);

  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const timerIsActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if (timerRemaining <= 0) {
    dialog.current.open()
    clearInterval(timer.current);
    setTimerRemaining(targetTime * 1000)
  }
  function handleTimerStart() {
    // settimerStarted(true);
    timer.current = setInterval(() => {
      setTimerRemaining((prev) => prev - 10);
    }, 10);
  }

  function handleTimerStop() {
    dialog.current.open()
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal targetTime={targetTime} result="lost" ref={dialog} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleTimerStop : handleTimerStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : "null"}>
          {timerIsActive ? "Time Is Running" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;

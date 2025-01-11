import React, { useRef, useState } from "react";
import ResultModal from "../components/ResultModal";

function TimerChallenge({ title, targetTime }) {
  const [timerExpired, settimerExpired] = useState(false);
  const [timerStarted, settimerStarted] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  // let timer;
  function handleTimerStart() {
    settimerStarted(true);

    timer.current = setTimeout(() => {
      settimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  }
  function handleTimerStop() {
    clearTimeout(timer.current);
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
          <button onClick={timerStarted ? handleTimerStop : handleTimerStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : "null"}>
          {timerStarted ? "Time Is Running" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;

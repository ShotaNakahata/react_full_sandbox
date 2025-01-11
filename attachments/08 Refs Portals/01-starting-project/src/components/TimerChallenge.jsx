import React, { useRef, useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [timerExpired, settimerExpired] = useState(false);
  const [timerStarted, settimerStarted] = useState(false);
  const timer = useRef()

  // let timer;
  function handleTimerStart() {
    settimerStarted(true);

    timer.current = setTimeout(() => {
      settimerExpired(true);
    }, targetTime * 1000);
  }
  function handleTimerStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
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
  );
}

export default TimerChallenge;

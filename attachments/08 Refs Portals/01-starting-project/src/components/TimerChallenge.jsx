import React, { useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [timerExpired, settimerExpired] = useState(false);
  const [timerStarted, settimerStarted] = useState(false);

  function handleTimerStart() {
    settimerStarted(true);

    setTimeout(() => {
      settimerExpired(true);
    }, targetTime * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleTimerStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : "null"}>
        {timerStarted?"Time Is Running":"Timer is inactive"}
        </p>
    </section>
  );
}

export default TimerChallenge;

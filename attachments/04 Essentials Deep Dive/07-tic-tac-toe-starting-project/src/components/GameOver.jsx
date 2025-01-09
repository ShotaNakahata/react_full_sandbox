import React from "react";

export const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {/* {winner?<p>{winner} won</p>:<p>It's draw</p>} */}
      {winner && <p>{winner} won</p>}
      {!winner && <p>It's draw</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
};

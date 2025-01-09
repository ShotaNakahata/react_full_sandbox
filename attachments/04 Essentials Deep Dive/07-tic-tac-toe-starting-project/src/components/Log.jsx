import React from "react";

// turn = { square: { row: rowIdx, col: colIdx }, player: currentPlayer }
const Log = ({ logs }) => {
  return (
    <ol id="log">
      {logs.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player}selected{turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;

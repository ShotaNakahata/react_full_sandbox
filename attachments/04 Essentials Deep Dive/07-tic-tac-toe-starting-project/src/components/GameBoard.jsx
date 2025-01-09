import React, { useState } from "react";

const GameBoard = ({ handleSelectSquqre, gameBoard }) => {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button 
                onClick={()=>handleSelectSquqre(rowIdx,colIdx)}
                disabled={playerSymbol!==null}
                >{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

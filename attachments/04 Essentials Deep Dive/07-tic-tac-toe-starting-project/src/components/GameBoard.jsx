import React, { useState } from "react";

// 初期ゲームボードの生成
const initialGameboard = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));

// ゲームボードコンポーネント
const GameBoard = ({handleSelectSquqre}) => {
//   const [gameBoard, setGameBoard] = useState(initialGameboard);
//   const handleSquare = (rowIdx, colIdx) => {
//     setGameBoard((state) => {
//       const newState = [...state.map((innerArray)=>[...innerArray])];
//       newState[rowIdx][colIdx] = activePlayer;
//       return newState
//     });
//     handleSelectSquqre()
//   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={handleSelectSquqre}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

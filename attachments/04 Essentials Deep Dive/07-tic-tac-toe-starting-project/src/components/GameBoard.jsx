import React from "react";

// 初期ゲームボードの生成
const initialGameboard = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));

// ゲームボードコンポーネント
const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialGameboard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

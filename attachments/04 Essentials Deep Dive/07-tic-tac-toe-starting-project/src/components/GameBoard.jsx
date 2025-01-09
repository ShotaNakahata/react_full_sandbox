import React, { useState } from "react";

// 初期ゲームボードの生成
const initialGameboard = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));

// turn = { square: { row: rowIdx, col: colIdx }, player: currentPlayer }
// ゲームボードコンポーネント
const GameBoard = ({ handleSelectSquqre, turns }) => {
  let gameBoard = initialGameboard;
  for (let turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }

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
                <button onClick={()=>handleSelectSquqre(rowIdx,colIdx)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

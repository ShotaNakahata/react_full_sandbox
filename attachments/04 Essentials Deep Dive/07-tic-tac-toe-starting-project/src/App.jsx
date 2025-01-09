import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./db/winning-combinations";

const initialGameboard = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = initialGameboard;
  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  // export const WINNING_COMBINATIONS = [
  //   [
  //     { row: 0, column: 0 },
  //     { row: 0, column: 1 },
  //     { row: 0, column: 2 },
  //   ],
  //   [
  //     { row: 1, column: 0 },
  //     { row: 1, column: 1 },
  //     { row: 1, column: 2 },
  //   ],
  //   [
  //     { row: 2, column: 0 },
  //     { row: 2, column: 1 },
  //     { row: 2, column: 2 },
  //   ],]

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquqre(rowIdx, colIdx) {
    // setActivePlayer((state) => (state === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      const activePlayer = deriveActivePlayer(prevTurns);
      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }
      const updatedTurn = [
        { square: { row: rowIdx, col: colIdx }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTurn;
    });
  }
  return (
    <>
      <Header></Header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="player1"
              symbol="X"
              activePlayer={activePlayer === "X"}
            ></Player>
            <Player
              name="player2"
              symbol="O"
              activePlayer={activePlayer === "O"}
            ></Player>
          </ol>
          {winner && <p>winner is {winner}</p>}
          <GameBoard
            handleSelectSquqre={handleSelectSquqre}
            gameBoard={gameBoard}
          />
        </div>
        <Log logs={gameTurn} />
      </main>
    </>
  );
}

export default App;

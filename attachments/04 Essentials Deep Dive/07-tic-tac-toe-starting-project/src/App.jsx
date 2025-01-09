import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./db/winning-combinations";
import { GameOver } from "./components/GameOver";

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
  const [player, setPlayer] = useState({
    X: "pa;yer1",
    O: "player2",
  });
  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...initialGameboard.map((arry) => [...arry])];
  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
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
      winner = player[firstSquareSymbol];
    }
  }

  const draw = gameTurn.length === 9 && !winner;

  function handleRestart() {
    setGameTurn([]);
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

  function handlePlayer(symbol,newName) {
    setPlayer(prev=>({
      ...prev,
      [symbol]:newName
    }))
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
              onChangeName={handlePlayer}
            ></Player>
            <Player
              name="player2"
              symbol="O"
              activePlayer={activePlayer === "O"}
              onChangeName={handlePlayer}
            ></Player>
          </ol>
          {(winner || draw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
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

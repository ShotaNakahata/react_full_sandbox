import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
import Log from "./components/Log";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurn)
  function handleSelectSquqre(rowIdx, colIdx) {
    // setActivePlayer((state) => (state === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      const activePlayer = deriveActivePlayer(prevTurns)
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
          <GameBoard handleSelectSquqre={handleSelectSquqre} turns={gameTurn} />
        </div>
        <Log logs={gameTurn} />
      </main>
    </>
  );
}

export default App;

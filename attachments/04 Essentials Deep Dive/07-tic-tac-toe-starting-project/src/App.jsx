import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
import Log from "./components/Log";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);
  function handleSelectSquqre(rowIdx, colIdx) {
    setActivePlayer((state) => (state === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurn = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
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
        <Log />
      </main>
    </>
  );
}

export default App;

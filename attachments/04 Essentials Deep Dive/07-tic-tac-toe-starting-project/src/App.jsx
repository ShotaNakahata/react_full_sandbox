import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquqre() {
    setActivePlayer((state) => (state === "X" ? "O" : "X"));
  }
  return (
    <>
      <Header></Header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="player1" symbol="X" activePlayer={activePlayer==="X"}></Player>
            <Player name="player2" symbol="O" activePlayer={activePlayer==="O"}></Player>
          </ol>
          <GameBoard handleSelectSquqre={handleSelectSquqre} activePlayer={activePlayer}/>
        </div>
        log
      </main>
    </>
  );
}

export default App;

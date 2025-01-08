import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="player1" symbol="X"></Player>
            <Player name="player2" symbol="O"></Player>
          </ol>
          <GameBoard/>
        </div>
        log
      </main>
    </>
  );
}

export default App;

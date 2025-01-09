import React from "react";
function App() {
  const [styleState, setStyleState] = React.useState("");

  function handleStyleGreen() {
    setStyleState("highlight-green");
  }
  function handleStyleRed() {
    setStyleState("highlight-red");
  }
  return (
    <div id="app">
      <h1
        // className={`${
        //   styleState === "highlight-green"
        //   ? "highlight-green"
        //   : styleState === "highlight-green"
        //   ?"highlight-green"
        //   :""
        // }`}
        className={`${
          styleState === "highlight-green"
            ? "highlight-green"
            : styleState ==="highlight-red"
            ? "highlight-red"
            :""

        }`}
      >
        CSS is great!
      </h1>
      <menu>
        <li>
          <button onClick={handleStyleGreen}>Yes</button>
        </li>
        <li>
          <button onClick={handleStyleRed}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

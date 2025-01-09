import React from 'react';
function App() {
    const [styleState, setStyleState] = React.useState("white");
    
    function handleColorGreen(e) {
        setStyleState("green")
    }
    function handleColorRed(e) {
        setStyleState("red")
    }
 
    return (
    <div id="app">
      <h1 style={{color: {styleState}}} >CSS is great!</h1>
      <menu>
        <li>
          <button onClick={handleColorGreen} >Yes</button>
        </li>
        <li>
          <button onClick={handleColorRed}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

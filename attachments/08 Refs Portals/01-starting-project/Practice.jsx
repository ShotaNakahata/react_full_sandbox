import { React } from "react";
function App() {
  const [state, setState] = React.useState();
  const inputRef = React.useRef();
  console.log(inputRef.current.value)

  function handleSubmit(params) {
    console.log(inputRef.current.value)
    inputRef.current.click(); 
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={inputRef}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />

        <button 
        onClick={handleSubmit}
        >Pick Image</button>
      </p>
    </div>
  );
}

export default App;

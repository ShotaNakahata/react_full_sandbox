import { useState } from "react";
import Header  from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 600,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    
    setUserInput(prev=>({
        ...prev,
        [name]:+value
    }))
  };
  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} handleInput={handleInput}></UserInput>
      <Result userInput={userInput}></Result>
    </>
  );
}

export default App;

//Initial Investment _  Annual Investment _ Expect return  _ Duration
import React from "react";
import { useState } from "react";

function UserInput() {
  const [userInput, setUserInput] = useState({
    InitialInvestment: 1000,
    AnnualInvestment: 600,
    ExpectReturn: 6,
    Duration: 10,
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUserInput(prev=>({
        ...prev,
        [name]:value
    }))
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <label htmlFor="">
          <p>Initial Investment</p>
          <input
            type="number"
            name="InitialInvestment"
            required
            onChange={handleInput}
            value={userInput.InitialInvestment}
          />
        </label>
        <label htmlFor="">
          <p>Annual Investment</p>
          <input
            type="number"
            name="AnnualInvestment"
            required
            onChange={handleInput}
            value={userInput.AnnualInvestment}
          />
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="">
          <p> Expect return</p>
          <input
            type="number"
            name="ExpectReturn"
            required
            onChange={handleInput}
            value={userInput.ExpectReturn}
          />
        </label>
        <label htmlFor="">
          <p>Duration</p>
          <input
            type="number"
            name="Duration"
            required
            onChange={handleInput}
            value={userInput.Duration}
          />
        </label>
      </div>
    </section>
  );
}

export default UserInput;

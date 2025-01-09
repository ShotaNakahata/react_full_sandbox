//Initial Investment _  Annual Investment _ Expect return  _ Duration
import React from "react";
import { useState } from "react";

function UserInput({handleInput,userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <label htmlFor="">
          <p>Initial Investment</p>
          <input
            type="number"
            name="initialInvestment"
            required
            onChange={handleInput}
            value={userInput.initialInvestment}
          />
        </label>
        <label htmlFor="">
          <p>Annual Investment</p>
          <input
            type="number"
            name="annualInvestment"
            required
            onChange={handleInput}
            value={userInput.annualInvestment}
          />
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="">
          <p> Expect return</p>
          <input
            type="number"
            name="expectedReturn"
            required
            onChange={handleInput}
            value={userInput.expectedReturn}
          />
        </label>
        <label htmlFor="">
          <p>Duration</p>
          <input
            type="number"
            name="duration"
            required
            onChange={handleInput}
            value={userInput.duration}
          />
        </label>
      </div>
    </section>
  );
}

export default UserInput;

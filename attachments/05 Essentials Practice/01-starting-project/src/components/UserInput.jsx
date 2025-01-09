//Initial Investment _  Annual Investment _ Expect return  _ Duration
import React from "react";

function UserInput() {
  return (
    <section id="user-input">
        
      <div className="input-group">
        <label htmlFor="">
          <p>Initial Investment</p>
          <input type="number" required/>
        </label>
        <label htmlFor="">
          <p>Annual Investment</p>
          <input type="number" required/>
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="">
          <p> Expect return</p>
          <input type="number" required/>
        </label>
        <label htmlFor="">
          <p>Duration</p>
          <input type="number" required/>
        </label>
      </div>

    </section>
  );
}

export default UserInput;

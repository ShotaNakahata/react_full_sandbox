import { useState } from "react";

/* eslint-disable react/react-in-jsx-scope */
export default function Login() {
  const [enteredVal, setEnteredVal] = useState({
    enteredEmail: "",
    enteredPassword: ""
  })
  function handleInputValue(identify,event) {
    setEnteredVal(prev=>({
      ...prev,
      [identify]:event.target.value
    }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log("enteredVal: ", enteredVal)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event)=>handleInputValue("enteredEmail",event)}
            value={enteredVal.enteredEmail}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event)=>handleInputValue("enteredPassword",event)}
            value={enteredVal.enteredPassword}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

import { useRef } from "react";

/* eslint-disable react/react-in-jsx-scope */
export default function Login() {
  const emailRef = useRef()
  const inputRef = useRef()
  function handleSubmit(e) {
    e.preventDefault()
    console.log(emailRef.current.value)
    console.log(inputRef.current.value)
    emailRef.current.value=""
    inputRef.current.value=""
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
            ref={emailRef}
            // onChange={(event)=>handleInputValue("enteredEmail",event)}
            // value={enteredVal.enteredEmail}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={inputRef}
            // onChange={(event)=>handleInputValue("enteredPassword",event)}
            // value={enteredVal.enteredPassword}
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

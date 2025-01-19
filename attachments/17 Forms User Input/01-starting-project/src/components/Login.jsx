import { useState } from "react";
import { useRef } from "react";

/* eslint-disable react/react-in-jsx-scope */
export default function Login() {
  const [emailIsInvalid,setEmailIsInvalid] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  function handleSubmit(e) {
    e.preventDefault()
    const enteredEmail = emailRef.current.value
    const passwordRef = passwordRef.current.value
    const emailIsValid = enteredEmail.includes("@");
    if(!emailIsValid){
      setEmailIsInvalid(true)
      return;
    }
    setEmailIsInvalid(false)
    console.log("sending HTTP request...")

    // emailRef.current.value = ""
    // passwordRef.current.value = ""
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
          <div className="control-error">{emailIsInvalid&&<p>Please input valid email adress</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
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

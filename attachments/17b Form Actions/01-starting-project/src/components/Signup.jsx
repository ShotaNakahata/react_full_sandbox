/* eslint-disable react/react-in-jsx-scope */
import { useActionState } from "react";
import { isEmail, isNotEmpty, hasMinLength, isEqualToOtherValue } from "../util/validation";
export default function Signup() {
  function singUpAction(prevFormState, formData) {
    const data = Object.fromEntries(formData.entries());
    const { email, password, "confirm-password": confirmPassword, "first-name": firstName, "last-name": lastName, role, terms } = data;
    console.log("terms : ",terms)
    console.log("role : ",role)
    const acquisitionChannel = formData.getAll("acquisition")
    let errors = []
    if (isEmail(email)) {
      errors.push("Invalid email adress")
    }
    if (!isNotEmpty(password) || !hasMinLength(password, 3)) {
      errors.push("You must provide passwort with at least 3 characters")
    }
    if (isEqualToOtherValue(password, confirmPassword)) {
      errors.push("Password do not match")
    }
    if (!isNotEmpty(firstName || !isNotEmpty(lastName))) {
      errors.push("You must provide Name")
    }
    if (!isNotEmpty(role)) {
      errors.push("Please select roll")
    }
    if ((terms)) {
      errors.push("Please Agree terms")
    }
    if (acquisitionChannel.length === 0) {
      errors.push("Please select at least one")
    }
    if (errors !== 0) {
      console.log(errors)
      return {
        errors, enteredVal: {
          email, password, confirmPassword, firstName, lastName, role, terms, acquisitionChannel
        }
      }
    }
    return { errors: null }
  }
  const [formState, formAction] = useActionState(singUpAction, { errors: null })
  return (
    <>
      <form action={formAction}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>

        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" defaultValue={formState.enteredVal?.email} />
        </div>

        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" defaultValue={formState.enteredVal?.password} />
          </div>

          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              defaultValue={formState.enteredVal?.confirmPassword}
            />
          </div>
        </div>

        <hr />

        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" defaultValue={formState.enteredVal?.firstName} />
          </div>

          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" defaultValue={formState.enteredVal?.lastName} />
          </div>
        </div>

        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role" defaultValue={formState.enteredVal?.role}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>

        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
              defaultChecked={formState.enteredVal?.acquisitionChannel.includes("google")}
            />
            <label htmlFor="google">Google</label>
          </div>

          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
              defaultChecked={formState.enteredVal?.acquisitionChannel.includes("friend")}
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>

          <div className="control">
            <input
              type="checkbox"
              id="other"
              name="acquisition"
              value="other"
              defaultChecked={formState.enteredVal?.acquisitionChannel.includes("other")}
            />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>

        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" defaultChecked={formState.enteredVal?.terms} />
            agree to the terms and conditions
          </label>
        </div>

        {formState.errors &&
          <ul className="error">
            {formState.errors.map((error) => {
              return <li key={error}>{error}</li>
            })}
          </ul>
        }

        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button className="button">Sign up</button>
        </p>
      </form>
    </>
  );
}

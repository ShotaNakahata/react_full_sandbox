import { useActionState } from "react"

/* eslint-disable react/react-in-jsx-scope */
export function NewOpinion() {
  function shareOpinionAction(prevState, formData) {
    const data = Object.fromEntries(formData.entries())
    const { userName, title, body } = data
    let error = []
    if (!userName.trim()) {
      error.push("must provide username")
    }
    if (title.trim().length < 5) {
      error.push("title must be at least 5 characters long")
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      error.push("opinion must be between 10 and 300 characters long")
    }
    if (error.length > 0) {
      return {
        error, inputVal: {
          userName,
          title,
          body
        }
      }
    }
    //submit to backend
    return { error: null }
  }
  const [formState, formAction] = useActionState(shareOpinionAction, { error: null })
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.inputVal?.userName}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.inputVal?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.inputVal?.body}></textarea>
        </p>

        {formState.error && (
          <ul className="errors">
            {formState.error.map((error) => {
              return <li key={error}>{error}</li>
            })}
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}

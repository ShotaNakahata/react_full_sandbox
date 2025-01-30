/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate, Form, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  console.log("Into EventForm")
  const navigate = useNavigate();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : "New Ivent"} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : "https://www.w3schools.com/html/img_girl.jpg"} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : new Date().toISOString().split("T")[0]} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : "New Ivent"} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;

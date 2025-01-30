/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate, Form, useNavigation, useActionData } from 'react-router-dom';
import { redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const data = useActionData()
  console.log("Action Data (errors):", data);
  console.log("Into EventForm");
  const navigate = useNavigate();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (<ul>{Object.values(data.errors).map((err) => {
        return (
          <li key={err}>{err}</li>
        )
      })}</ul>)}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event ? event.title : "New Ivent"} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event ? event.image : "https://www.w3schools.com/html/img_girl.jpg"} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event ? event.date : new Date().toISOString().split("T")[0]} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" defaultValue={event ? event.description : "New Ivent"} />
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


export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = Object.fromEntries(data.entries());

  let url = "http://localhost:8080/events"
  if (request.method === "PATCH") {
    const id = params.eventId
    url = "http://localhost:8080/events/" + id
  }

  const response = await fetch(url, {
    method: request.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    if (response.status === 422) {
      const errorData = await response.json();
      return errorData;
    }
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "could not fetch event" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }

  return redirect("/events");
}

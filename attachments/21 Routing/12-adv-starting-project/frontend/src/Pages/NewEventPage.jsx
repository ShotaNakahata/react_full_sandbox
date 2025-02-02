import React from 'react'
import EventForm from '../components/EventForm'
// import { redirect } from 'react-router-dom';

function NewEventPage() {
  console.log("Now Open NewEventPage")
  return (
    <EventForm method="POST"></EventForm>
  )
}

export default NewEventPage

// export async function action({ request }) {
//   console.log("Ran NewEventPage Action");
//   console.log("from NewEventPage Action (request):", request);

//   const data = await request.formData();

//   const eventData = Object.fromEntries(data.entries());
//   console.log("Final eventData:", eventData);

//   const response = await fetch("http://localhost:8080/events", {
//       method: request.method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(eventData),
//     });

//     if(response.status===422){
//       if (response.status === 422) {
//         const errorData = await response.json(); 
//         return errorData; 
//       }
//     }

  // if (!response.ok) {
  //   throw new Response(JSON.stringify({ message: "could not fetch event" }),{
  //     status: 500,
  //     statusText: "Internal Server Error",
  //   } );
  // }

//   return redirect("/events");
// }

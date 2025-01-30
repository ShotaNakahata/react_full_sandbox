import React from 'react'
import EventForm from '../components/EventForm'
import { redirect } from 'react-router-dom';

function NewEventPage() {
  console.log("Now Open NewEventPage")
  return (
    <EventForm></EventForm>
  )
}

export default NewEventPage

export async function action({ request }) {
  console.log("Ran NewEventPage Action");
  console.log("from NewEventPage Action (request):", request);

  // `request` を複製しておく
  const requestClone = request.clone();

  // 1回目: 生データを確認（デバッグ用）
  console.log("from NewEventPage Action (raw text body):", await requestClone.headers.get("Content-Type"));
  

  // 2回目: `FormData` を取得
  const data = await request.formData();
  console.log("from NewEventPage Action (data):", data);

  const eventData = Object.fromEntries(data.entries());
  console.log("Final eventData:", eventData);

  // const response = await fetch("http://localhost:8080/events", {
  // // //さっきのdeleteのところ見て思ったけどForm自体にpostメソッドを追加したからmethodをハードコーディングせずにrequestから受け取れるんじゃね？
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(eventData),
  // });
  const response = await fetch("http://localhost:8080/events", {
    // //さっきのdeleteのところ見て思ったけどForm自体にpostメソッドを追加したからmethodをハードコーディングせずにrequestから受け取れるんじゃね？
      method: request.method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "could not fetch event" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }

  return redirect("/events");
}

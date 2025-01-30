import React from 'react'
import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem';

function EventDetailPage() {
    const data = useRouteLoaderData("event-detail")
    console.log("from EventDetailPage (data): ", data)
    return (
        <EventItem event={data.event} />
    )
}

export default EventDetailPage

//Event Detail GET 
export async function loader({ params }) {
    const id = params.eventId
    const response = await fetch("http://localhost:8080/events/" + id)
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        throw new Response(JSON.stringify({
            message: "could not fetch event"
        }, {
            status: 500,
            statusText: "Internal Server Error"
        }))
    }
}


//delete Action
export async function action({ request, params }) {
    const id = params.eventId
    const response = await fetch("http://localhost:8080/events/" + id, {
        method: request.method
    })
    if (response.ok) {
        return redirect("/events")
    } else {
        throw new Response(JSON.stringify({
            message: "could not delete event"
        }, {
            status: 500,
            statusText: "Internal Server Error"
        }))
    }
}
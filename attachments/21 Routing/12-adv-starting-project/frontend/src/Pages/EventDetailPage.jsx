import React from 'react'
import {  useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem';

function EventDetailPage() {
    const data = useRouteLoaderData("event-detail")
    console.log("from EventDetailPage (data): ", data)
    return (
        <EventItem event={data.event} />
    )
}

export default EventDetailPage


export async function loader({  params }) {//ここの二つの引数はどうやって渡すのか、受け取るのか
    const id = params.eventId
    const response = await fetch("http://localhost:8080/events/" + id)
    if (response.ok) {
        const data =await  response.json()
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
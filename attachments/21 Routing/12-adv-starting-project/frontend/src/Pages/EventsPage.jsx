import React from 'react'
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    { id: "p1", title: "event-1" },
    { id: "p2", title: "event-2" }
]


function EventsPage() {
    return (
        <>
            <h1>Event Page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => {
                    return (
                        <li key={event.id}>
                            <Link to={event.id}>{event.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default EventsPage
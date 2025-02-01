/* eslint-disable react/react-in-jsx-scope */
import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData, Await } from 'react-router-dom';

function EventsPage() {
    const { events } = useLoaderData()

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    );
}

export default EventsPage;

export async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new Response(JSON.stringify({
            message: "could not fetch event"
        }), {
            status: 500,
            statusText: "Internal Server Error"
        });
    } else {
        const resData = await response.json();
        console.log("Form App.js /events (resData): ", resData)
        return resData.events
    }
}

export async function loader() {
    return { events: loadEvents() }
}
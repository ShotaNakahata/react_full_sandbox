/* eslint-disable react/react-in-jsx-scope */
import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
    const events = useLoaderData()
    console.log("From Events Page (events): ", events)
    return (
        <>
            {<EventsList events={events} />}
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // throw json({
        //     message: "could not fetch event"
        // },{
        //     status:500
        // })
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
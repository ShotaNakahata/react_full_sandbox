/* eslint-disable react/react-in-jsx-scope */
import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
    const events = useLoaderData()
    // const [isLoading, setIsLoading] = useState(false);
    // const [fetchedEvents, setFetchedEvents] = useState();
    // const [error, setError] = useState();

    // useEffect(() => {
    //     async function fetchEvents() {
    //         setIsLoading(true);
    //         console.log("form Events.js / Start fetch events")
    //         // const response = await fetch('http://localhost:8080/events');

    //         // if (!response.ok) {
    //         //     setError('Fetching events failed.');
    //         // } else {
    //         //     const resData = await response.json();
    //         //     setFetchedEvents(resData.events);
    //         // }
    //         setIsLoading(false);
    //     }

    //     fetchEvents();
    // }, []);
    return (
        <>
            {/* <div style={{ textAlign: 'center' }}>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div> */}
            {/* {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
            {<EventsList events={events} />}
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // error 対処
    } else {
        const resData = await response.json();
        console.log("Form App.js /events (resData): ", resData)
        return resData.events
    }
}
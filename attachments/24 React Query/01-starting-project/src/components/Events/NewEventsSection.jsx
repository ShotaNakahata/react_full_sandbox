/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime:6000
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch events"} />
      //httpのエラーの際のresにmessageと記載されていないがなぜ存在することになっているの？
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}

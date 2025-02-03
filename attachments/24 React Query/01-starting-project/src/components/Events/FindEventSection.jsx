/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { fetchEvents } from '../../util/http';
import { useState } from 'react';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';

export default function FindEventSection() {
  const [serchTerm, setSerchTerm] = useState();
  const searchElement = useRef();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { search: serchTerm }],
    queryFn: ({signal,queryKey}) => {
      const [,params]= queryKey
      return fetchEvents({signal,serchTerm:params.search})
    }
  })

  function handleSubmit(event) {
    event.preventDefault();
    setSerchTerm(searchElement.current.value)
  }
  let content = <p>Please enter a search term and to find events.</p>
  if (isPending) {
    content = <LoadingIndicator />
  }
  if (isError) {
    content = <ErrorBlock title="An Error occurred" message={error.info?.message || "faild fech"} />
  }
  if (data) {
    content = (<ul className="events-list">
      {data.map((event) => <li key={event.id}><EventItem event={event} /></li>)}
    </ul>)
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}

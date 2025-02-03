/* eslint-disable react/react-in-jsx-scope */
//[{"id":"e1","title":"Web Dev Networking Night!","description":"Meet, connect, and network with fellow budding web developers. Share your experiences and learn from others.","date":"2024-09-25","time":"18:00","location":"Innovation Lounge, New York, NY","image":"meeting-networking.jpg"}
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id })
  });
  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"]
      })
      navigate("/events")
    }
  })
  function handleDelete() {
    mutate({ id });
  }
  function handleStartDelete() {
    setIsDeleting(true)
  }
  function handleStopDelete() {
    setIsDeleting(false)
  }
  console.log(data)

  let content;

  if (isPending) {
    content = (
      <div id='event-details-content' className='center'>
        <p>Loading...</p>
      </div>
    )
  }

  if (isError) {
    content = (
      <div id='event-details-content' className='center'>
        <ErrorBlock title="fail to fetch" message={error.info?.message} />
      </div>
    )
  }

  if (data) {
    content = (

      <>
        {isDeleting &&
          <Modal onClose={handleStopDelete}>
            <h2>Are you sure?</h2>
            <p>Do you really want to delete?</p>
            <div className='form-actions'>
              <button onClick={handleStopDelete}>Cancel</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </Modal>}
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{`${data.date}-${data.time}`}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>

    )
  }
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}

/* eslint-disable react/react-in-jsx-scope */
//[{"id":"e1","title":"Web Dev Networking Night!","description":"Meet, connect, and network with fellow budding web developers. Share your experiences and learn from others.","date":"2024-09-25","time":"18:00","location":"Innovation Lounge, New York, NY","image":"meeting-networking.jpg"}
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
//queryKey:[events]で全てのdataを取得しているならそのキャシュを使用してそこから該当idのeventを探す方法でもいいのでは？
export default function EventDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isPending } = useQuery({
    queryKey: ["events", { id: id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id })
  });
  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] })
      navigate("/events")
    }
  })
  function handleDelete() {
    mutate({id});
  }
  console.log(data)
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && <p>Loading...</p>}
      {data &&
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="IMG" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{`${data.date}-${data.time}`}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      }
    </>
  );
}

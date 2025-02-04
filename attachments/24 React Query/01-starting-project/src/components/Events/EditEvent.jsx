/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const { id } = useParams()
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id })
  })
  const { mutate } = useMutation({
    mutationKey: ["events", id],
    mutationFn: updateEvent,
    onMutate: async(data) => {
      const event = data.event
      await queryClient.cancelQueries({queryKey:["events", id]})
      const prevQueryData = queryClient.getQueryData(["events", id]);
      queryClient.setQueryData(["events", id], event);
      return{ prevQueryData}
    },
    onError:({error,content})=>{
      queryClient.setQueryData(["events", id], content.prevQueryData);
    },
    onSettled:()=>{
      queryClient.invalidateQueries(["events", id])
    }
  })

  const navigate = useNavigate();

  function handleSubmit(formData) {
    mutate({ id, event: formData })
  }

  function handleClose() {
    navigate('../');
  }
  let content;
  if (isPending) {
    content = (
      <div className='center'>
        <LoadingIndicator />
      </div>
    )
  }
  if (isError) {
    content = (
      <>
        <ErrorBlock />
        <div className='form-actions'>
          <Link to="../" className='button'>
            OK
          </Link>
        </div>
      </>
    )
  }
  if (data) {
    content = (
      <>
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      </>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

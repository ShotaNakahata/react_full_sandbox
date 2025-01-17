/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import ErrorPage from "../../../Error.jsx";
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvalilablePlace } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlace, setAvailablePlace] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)
      try {
        const resData = await fetchAvalilablePlace()
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlace = sortPlacesByDistance(resData.places, position.coords.latitude, position.coords.longitude)
          setAvailablePlace(sortedPlace)
          setIsFetching(false)
        })

      } catch (error) {
        setError({ message: error.message || "faild to fetch place data" })
        setIsFetching(false)
      }
    }
    fetchPlaces();
  }, [])

  if (error) {
    return <ErrorPage title="An error occured" message={error.message} ></ErrorPage>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlace}
      isLoading={isFetching}
      loadingText="fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlace, setAvailablePlace] = useState([])

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)
      const response = await fetch("http://localhost:3000/places")
      const resData = await response.json()
      setAvailablePlace(resData.places)
      setIsFetching(false)
    }
    fetchPlaces();
  }, [])

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

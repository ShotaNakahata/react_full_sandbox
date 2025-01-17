/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlace, setAvailablePlace] = useState([])

  useEffect(()=>{
    async function fetchPlaces () {
      const response = await fetch("http://localhost:3000/places")
      const resData = await response.json()
      setAvailablePlace(resData.places)
    }
    fetchPlaces();
  },[])

  return (
    <Places
      title="Available Places"
      places={availablePlace}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

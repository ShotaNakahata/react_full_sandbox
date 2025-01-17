/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlace,setAvailablePlace] = useState([])

  fetch("http://localhost:3000/places").then((response)=>{
    return response.json();
  }).then((resData)=>{
    console.log("resData : ",resData)
    console.log("resData.places : ",resData.places)
    setAvailablePlace(resData.places);
  })
  return (
    <Places
      title="Available Places"
      places={[]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

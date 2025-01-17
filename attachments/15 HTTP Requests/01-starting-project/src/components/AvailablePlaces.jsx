/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import ErrorPage from "../../../Error.jsx";
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlace, setAvailablePlace] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)
      try {
        const response = await fetch("http://localhost:3000/places")
        const resData = await response.json()
        if (!response.ok) {
          throw new Error("failed to fetch places")//なぜここの条件文が必要なのか？もしfetch内のpromiseがrejectされたら自動的にcatchの方に行かないのか？それとも明示的にnew errorでerrorを生成しないとcatchがエラーがアタと認識しないのか
        }
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

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useFetch } from "../hooks/useFetch";
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

async function fetchSortedPlace() {
  const places = await fetchAvailablePlaces()

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );
      return resolve(sortedPlaces)
    });
  })
}

export default function AvailablePlaces({ onSelectPlace }) {
  const { isFetching, fetchData: availablePlaces, error } = useFetch(fetchSortedPlace, [])

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

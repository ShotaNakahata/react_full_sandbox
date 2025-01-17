/* eslint-disable react/react-in-jsx-scope */
import { useRef, useState, useCallback } from 'react';
import ErrorPage from "../../Error.jsx";
import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlace } from './http.js';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [erroUpdatingPlaces, setErroUpdatingPlaces] = useState()
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await updateUserPlace({ places: [selectedPlace, ...userPlaces] })
    } catch (error) {
      setUserPlaces(userPlaces)
      setErroUpdatingPlaces({ message: error.message || "faild to update places" })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try {
      await updateUserPlace(
        { places: userPlaces.filter((place) => place.id !== selectedPlace.current.id) }
      )
    } catch (error) {
      setUserPlaces(userPlaces)
      setErroUpdatingPlaces({ message: error.message || "faild to delete places" })
    }

    setModalIsOpen(false);
  }, []);

  function handleError() {
    setErroUpdatingPlaces(null)
  }

  return (
    <>
      <Modal open={erroUpdatingPlaces} onClose={handleError}>
        {erroUpdatingPlaces && <ErrorPage
          title="An Error occurred"
          message={erroUpdatingPlaces.message}
          onConfirm={handleError} />}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;

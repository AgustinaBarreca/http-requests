import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    async function fetchData() {
      const response = await fetch('http://localhost:3000/places')
      const resData = await response.json()
      setAvailablePlaces(resData.places)
      setIsFetching(false)
    }

    fetchData()
  }, [])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoadingPlaces={isFetching}
      loadingText="Fetching places data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

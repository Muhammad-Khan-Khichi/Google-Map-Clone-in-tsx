import {  useState } from 'react'
import type { Place } from '../api/Place'
import { search } from '../api/Search';

interface LocationSearchProps{
    onPlaceClick: (place: Place) => void;
}

function LocationSearch({ onPlaceClick }: LocationSearchProps) {

    const [term, setTerm] = useState('')
    const [places , setPlaces] = useState<Place[]>([])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const results = await search(term);
        setPlaces(results)
    }

  return (
<div className="space-y-6">
  <form onSubmit={handleSubmit} className="space-y-2">
    <label
      htmlFor="term"
      className="block text-gray-700 font-semibold text-sm"
    >
      🔍 Search for a location
    </label>
    <input
    autoComplete='off'
      id="term"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder="Enter a city, place, or address..."
      className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 
                 outline-none transition"
    />
  </form>

  <div>
    <h1 className="text-lg font-bold text-gray-800 mb-3">
      📍 Found Locations
    </h1>

    <div className="space-y-3">
      {places.map((place) => (
        <div
          key={place.id}
          className="flex items-center justify-between p-3 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition"
        >
          <p className="text-sm font-medium text-gray-700">{place.name}</p>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-xs text-white font-semibold px-3 py-1 rounded transition"
            onClick={() => onPlaceClick(place)}
          >
            Go
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default LocationSearch

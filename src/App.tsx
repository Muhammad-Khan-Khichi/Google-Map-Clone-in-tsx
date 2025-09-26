import { useState } from 'react'
import type { Place } from './api/Place'
import './App.css'
import LocationSearch from './components/LocationSearch'
import Map from './components/Map'

function App() {

  const [place, setPlace] = useState<Place | null>(null)

  return (
    <div className="h-screen w-screen grid grid-cols-12 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="col-span-3 p-4">
        <div className="h-full rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 p-5 flex flex-col transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            🌍 Search Location
          </h2>

          <LocationSearch onPlaceClick={(p) => setPlace(p)} />

          <div className="mt-auto text-sm text-gray-500 border-t pt-3">
            Developed by <span className="font-semibold">Muhammad Khan</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="col-span-9 relative">
        <div className="h-full w-full rounded-l-2xl overflow-hidden shadow-md border border-gray-200">
          <Map place={place} />
        </div>
      </div>
    </div>
  )
}

export default App

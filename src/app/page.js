"use client"
import Card from '@/components/weather-app/card'
import Api from '@/components/weather-app/weatherApi'
import { faChevronLeft, faSearch, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CITIES= [
  { lon: 12.5683, lat: 55.6761 },    // Copenhagen, Denmark
  { lon: 2.3522, lat: 48.8566 },     // Paris, France
  { lon: 13.4050, lat: 52.5200 },    // Berlin, Germany
  { lon: -0.1180, lat: 51.5099 },    // London, United Kingdom
  { lon: 12.4964, lat: 41.9028 },    // Rome, Italy
];

export default function Home() {
  return (
    <>
      <header className='flex flex-col'>
        <nav className='flex gap-5 m-5 items-center justify-between'>
          <div className='flex items-center gap-5'>
            <FontAwesomeIcon className='text-white self-center' icon={faChevronLeft} />
            <h1 className='text-4xl text-white'>Weather</h1>
          </div>
          <div className='flex items-center justify-end'>
            <FontAwesomeIcon className='text-white self-center' icon={faEllipsis} />
          </div>
        </nav>
        <label className='relative w-11/12 m-auto'>
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faSearch} height={20} className="text-gray-500" />
          </span>
          <input
            className="w-full flex items-center bg-transparent rounded-2xl p-2 pl-9"
            style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'}}
            placeholder="Search for a city or airport" />
        </label>
      </header>
      {/* <Api /> */}
      {CITIES.map((coords, index) => (<Card key={index} lon={coords.lon} lat={coords.lat} />))}
      
    </>

  )
}

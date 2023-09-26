import React, { useState } from 'react';
import { UilSearch, UilLocationPoint, UilCelsius, UilFahrenheit } from '@iconscout/react-unicons'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") {
            setQuery({ q: city })
            setCity("")
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info("Process the user location.")
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success("Location fetched!")
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({lat, lon})
            })
        }
            toast.error("Unable to access your location. Please enable location permissions.")
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) {
            setUnits(selectedUnit)
        }
    }

  return (
      <div className='flex flex-row justify-center my-6'>
          <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
              <input value={city}
                  onChange={(e)=> setCity(e.currentTarget.value)}
                  type="text" placeholder='Search location...' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' />
              <UilSearch onClick={handleSearchClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
              <UilLocationPoint onClick={handleLocationClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
          </div>
          <div className='flex flex-row w-1/4 items-center justify-center'>
              <button 
              onClick={handleUnitsChange} name='metric' className='text-white text-xl font-light transition ease-out hoover:scale-125'>
                  <UilCelsius />
              </button>
              <p className='text-2xl text-white mx-2'>|</p>
              <button onClick={handleUnitsChange} name='imperial' className='text-white text-xl font-light transition ease-out hoover:scale-125'>
                  <UilFahrenheit />
              </button>
              
        </div>
    </div>
  )
}

export default Inputs
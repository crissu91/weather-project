import React from 'react';
import {
    UilArrowUp, UilArrowDown,
    UilTemperature, UilTear, UilWind,
    UilSun, UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
      <div>
          <div className='flex items-center justify-center py-6 text-l text-cyan-300'>
              <p>Cloudy</p>
          </div>
          <div className='flex flex-row items-center justify-between text-white py-3'>
              <svg data-v-3e6e9f12="" width="50px" height="50px" viewBox="0 0 148 148" className="owm-weather-icon w-20"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
              <p className='text-5xl'>34°</p>
              <div className='flex flex-col space-y-2'>
                  <div className='flex font-light text-sm items-center justify-center'>
                      <UilTemperature size={18} className="mr-1" />
                      Real feel: 
                      <span className='font-medium ml-1'>32°</span>
                  </div>

                  <div className='flex font-light text-sm items-center justify-center'>
                      <UilTear size={18} className="mr-1" />
                      Humidity: 
                      <span className='font-medium ml-1'>65%</span>
                  </div>

                  <div className='flex font-light text-sm items-center justify-center'>
                      <UilWind size={18} className="mr-1" />
                      Wind: 
                      <span className='font-medium ml-1'>11 km/h</span>
                  </div>
              </div>
          </div>

          <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
              <UilSun />
              <p className='font-light'>Rise <span className='font-medium ml-1'>06:45 AM</span></p>
              <p className='font-light'>|</p>

              <UilSunset />
              <p className='font-light'>Set: <span className='font-medium ml-1'>07:35 PM</span></p>
              <p className='font-light'>|</p>

              <UilArrowUp />
              <p className='font-light'>High: <span className='font-medium ml-1'>45°</span></p>
              <p className='font-light'>|</p>

              <UilArrowDown />
              <p className='font-light'>Low: <span className='font-medium ml-1'>40°</span></p>
          </div>
    </div>
  )
}

export default TemperatureAndDetails;
import React from 'react'
import { formatToLocalTime } from '../services/weatherServices'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
      <div>
          <div className='flex items-center justify-center md:my-6 my-4'>
              
              <p className='text-white md:text-xl text-sm font-extralight'>
              {formatToLocalTime(dt, timezone)}
              </p>
          </div>
          <div className='flex items-center justify-center my-3'>
              <p className='text-white text-xl font-medium'>
              {`${name}, ${country}`}
              </p>
          </div>
    </div>
  )
}

export default TimeAndLocation
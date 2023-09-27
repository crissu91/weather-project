import React from 'react'
import { iconUrl } from '../services/weatherServices'

function Forecast({title, items}) {
  return (
      <div>
          <div className='flex items-center justify-start mt-6'>
              <p className='text-white font-medium uppercase'>
                  {title}
              </p>
          </div>
          <hr className="my-2"></hr>
          <div className='flex flex-row items-center justify-between text-white'>

          {items.map((item, i) => 
              <div className='flex flex-col items-center justify-center' key={i}>
                  <p className='font-light text-sm'>
                      {item.title}
                  </p>
                  <img alt="" src={iconUrl(item.icon)}
                  className="w-12 my-1" />
                  <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
              </div>
    )}
          </div>        
    </div>
  )
}

export default Forecast
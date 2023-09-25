import React from 'react'

function Forecast({title}) {
  return (
      <div>
          <div className='flex items-center justify-start mt-6'>
              <p className='text-white font-medium uppercase'>
                  {title}
              </p>
          </div>
          <hr className='my-2'></hr>
          <div className='flex flex-row items-center justify-between text-white'>
              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      4:30 PM
                  </p>
                  <svg data-v-3e6e9f12="" width="50px" height="50px" viewBox="0 0 148 148" className="owm-weather-icon w-12 my-1"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
                  <p className='font-medium'>22°</p>
              </div>

              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      4:30 PM
                  </p>
                  <svg data-v-3e6e9f12="" width="50px" height="50px" viewBox="0 0 148 148" className="owm-weather-icon w-12 my-1"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
                  <p className='font-medium'>22°</p>
              </div>

              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      4:30 PM
                  </p>
                  <svg data-v-3e6e9f12="" width="50px" height="50px" viewBox="0 0 148 148" className="owm-weather-icon w-12 my-1"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
                  <p className='font-medium'>22°</p>
              </div>

              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      4:30 PM
                  </p>
                  <svg data-v-3e6e9f12="" width="50px" height="50px" viewBox="0 0 148 148" className="owm-weather-icon w-12 my-1"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
                  <p className='font-medium'>22°</p>
              </div>

              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      4:30 PM
                  </p>
                  <svg data-v-3e6e9f12="" width="50px" height="50px" viewBox="0 0 148 148" className="owm-weather-icon w-12 my-1"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
                  <p className='font-medium'>22°</p>
              </div>
              
          </div>
    </div>
  )
}

export default Forecast
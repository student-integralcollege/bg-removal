import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {
  const [slideposition, setSlidePosition] = useState(50);

  const handleSliderChange = (e) => {
    setSlidePosition(Number(e.target.value));
  };

  return (
    <div className='pb-10 md:py-20 mx-2'>
      <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Remove Background with High <br /> Quality and Accuracy
      </h1>
      <div className="relative w-full max-w-3xl m-auto overflow-hidden rounded-xl" style={{height: '350px'}}>
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100 - slideposition}% 0 0)` }}
          alt="With Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${slideposition}%)` }}
          alt="Without Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <input
          className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 z-10 slider'
          type="range"
          min={0}
          max={100}
          value={slideposition}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  )
}

export default BgSlider

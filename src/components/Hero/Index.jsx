import React from 'react'
import HeroRight from './components/HeroRight'
import HeroLeft from './components/HeroLeft'

const Hero = () => {
  return (
    <div className="herolower imgbg w-full">
      <div className='w-full h-full bg-customopacitycolor flex '>
        <HeroLeft />
        <HeroRight />
    </div>
    </div>
  )
}

export default Hero
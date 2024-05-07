import React from 'react'
import NavLeft from './components/NavLeft'
import NavRight from './components/NavRight'
import NavLogo from './components/NavLogo'

const index = () => {
  return (
   <>
    <div className='w-full h-20 bg-opacity-5 flex items-center justify-center gap-4 px-28 shadow-lg sticky bg-customwhite'>
    <NavLogo />
    <NavLeft />
    <NavRight />
    </div>
   </>
  )
}

export default index
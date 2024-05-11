import React from 'react'
import HeroLeft from '../../Hero/components/HeroLeft'

const InstrumentCardLeft = ({data}) => {
  return (
    <div className='w-[50%] h-full flex justify-center items-center p-10 ml-5'>
 
        <div className='w-[100%] h-[100%] flex flex-col items-start justify-evenly px-5 py-3'>
            <div className='w-full'>
                <img className='w-14 shadow-xl' src="/assets/asset 3.avif" alt="hero img" />
            </div>
            <div className='text-[1rem] flex flex-col gap-2'>
                <h1 className='font-bold text-[2rem] w-[90%]'>{data.title}</h1>
                <p className='font-semibold w-[100%]'>{data.para}</p>
            </div>

            <button className='bg-customBlack px-3 py-2 rounded-3xl border text-customwhite flex justify-center items-center gap-1 hover:text-[#333] hover:bg-customwhite hover:border transition-all'>
                Download Paytm App 
                <span><i className="ri-apple-fill"></i></span>
                <span><i className="ri-google-play-fill"></i></span>
            </button>
        </div>
    </div>
  )
}

export default InstrumentCardLeft
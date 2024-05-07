import React from 'react'

const HeroLeft = () => {
  return (
    <div className='w-[60%] h-[70vh] pl-32 '>
        <div className='w-[80%] h-full flex flex-col items-start justify-around py-3'>
            <div className='w-full'>
                <img className='w-14 shadow-xl' src="/assets/asset 3.avif" alt="hero img" />
            </div>
            <div className='text-[1rem]'>
                <h1 className='font-bold text-[2rem] w-[70%]'>India's Most-loved Payments App</h1>
                <p className='font-semibold w-[80%]'>Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</p>
            </div>

            <button className='bg-customblue px-3 py-2 rounded-3xl border text-customwhite flex justify-center items-center gap-1 hover:text-[#333] hover:bg-customwhite hover:border transition-all'>
                Download Paytm App 
                <span><i className="ri-apple-fill"></i></span>
                <span><i className="ri-google-play-fill"></i></span>
            </button>
        </div>
    </div>
  )
}

export default HeroLeft
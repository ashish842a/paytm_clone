import React from 'react'

const index = () => {
  return (
    <div className='text-center flex items-center justify-center w-full h-10 bg-customlightblue'>
        <div className="icon mr-4">
            <img className='w-6' src="/assets/asset 2.svg" alt="notification img" />
        </div>
        <p>We have received approval from NPCI as a Third-Party Application Provider (TPAP). </p> &nbsp;&nbsp;
        <a className='text-customblue' href="https://paytm.com/important-updates" target='_blank'>Click to know more</a>
    </div>
  )
}

export default index
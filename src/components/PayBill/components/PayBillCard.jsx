import React from 'react';

const PayBillCard = ({ data }) => {
  return (
    <div className='w-full h-full rounded-lg px-4 py-4 flex flex-col gap-3 hover:bg-hovercolordark'>
      <img className='w-12' src={data?.icon} alt="mobile prepaid bill" />
      <div className='max-w-10 font-semibold flex text-sm'>
        <p>{data?.content}</p>
        {/* <span>{">"}</span> */}
      </div>
    </div>
  );
};

export default PayBillCard;

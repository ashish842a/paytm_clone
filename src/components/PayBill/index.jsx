import React from 'react';
import PayBillCard from './components/PayBillCard';

const PayBill = ({ data, color }) => {
  console.log(color);
  return (
    <div style={{ backgroundColor: color }} className={`w-full h-[16rem] text-customwhite flex items-center justify-center`}>
      <div className='w-[80%] h-[84%] flex flex-col gap-6 mb-3'>
        <h1 className='font-bold text-3xl'>{data?.title}</h1>
        <div className="repeat w-full h-full flex items-center justify-between gap-4">
          {data && data.arr && data.arr.map((row, index) => (
            <PayBillCard key={index} data={row} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayBill;

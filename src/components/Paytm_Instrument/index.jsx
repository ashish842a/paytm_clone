import React from 'react';
import InstrumentCardLeft from './components/InstrumentCardLeft';
import InstrumentCardRight from './components/InstrumentCardRight';

const Paytm_Instrument = () => {

    const cardData = [
        {
            imgPath: "/assets/asset 20.webp",
            data: {
                title: "The Fastest Way to Pay In-store & Online.",
                para: "Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites, and apps.",
                btntext: "Download the App"
            }
        },
        {
            imgPath: "/assets/asset 22.webp",
            data: {
                title: "Pay anyone directly from your bank account.",
                para: "Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone.",
                btntext: "Download the App"
            }
        }
    ];

    return (
        <>
            <div className='container px-32 py-10 bg-customlightblue'>
                <div className='w-full h-12 text-3xl font-bold mt-5 '>
                    <p className='text-[3rem]'>Paytm Payment Instruments</p>
                </div>
                {cardData.map((row, index) => {
                    return (
                        <section key={index} className='w-full h-[32rem] bg-customwhite shadow-md blur-3 rounded-lg flex items-center mt-10'>
                            <InstrumentCardLeft data={row.data} />
                            <InstrumentCardRight imgpath={row.imgPath} />
                        </section>
                    );
                })}
            </div>
        </>
    );
};

export default Paytm_Instrument;

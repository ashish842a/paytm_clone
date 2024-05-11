import React from 'react';
import Nav from '../components/Nav';
import Notification from '../components/Notification';
import Hero from '../components/Hero/Index';
import PayBill from '../components/PayBill';
import Paytm_Instrument from '../components/Paytm_Instrument';

const Home = () => {

  const data = [
    {
      title: "Recharge & Pay Bills on Paytm.",
      arr: [
        {
          icon: `assets/asset 5.png`,
          content: "Recharge Prepaid Mobile"
        },
        {
          icon: `assets/asset 6.png`,
          content: "Pay Electricity Bill"
        },
        {
          icon: `assets/asset 7.png`,
          content: "Recharge DTH Connection"
        },
        {
          icon: `assets/asset 8.png`,
          content: "Book Gas Cylinder"
        },
        {
          icon: `assets/asset 9.png`,
          content: "Pay Broadband & Landline Bill"
        },
        {
          icon: `assets/asset 10.png`,
          content: "Pay Education Fee"
        },
        {
          icon: `assets/asset 11.png`,
          content: "All Payment Services"
        }
      ]
    },
    {
      title: "Book & Buy on Paytm.",
      arr: [
        {
          icon: "assets/asset 12.png",
          content: "Movie Tickets"
        },
        {
          icon: "assets/asset 13.png",
          content: "Flight Tickets"
        },
        {
          icon: "assets/asset 14.png",
          content: "Bus Tickets"
        },
        {
          icon: "assets/asset 15.avif",
          content: "Train Tickets"
        },
        {
          icon: "assets/asset 16.png",
          content: "Buy Insurance"
        },
        {
          icon: "assets/asset 17.png",
          content: "International Flights"
        },
        {
          icon: "assets/asset 18.webp",
          content: "Invest in Stocks"
        }
      ]
    }
  ];

  return (
    <>
      <div className='overflow-x-hidden'>
        <Nav />
        <Notification />
        <Hero />
        {data && data.map((row, index) => (
          <PayBill key={index} data={row} color={index % 2 === 0 ? "#00baf2" : "#0f4a8a"} />
        ))}
        <Paytm_Instrument />
      </div>
    </>
  );
};

export default Home;

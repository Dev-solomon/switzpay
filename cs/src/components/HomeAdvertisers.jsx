import React from 'react';
import BlueCard from './BlueCard';
import YellowCard from './YellowCard';
import RedCard from './RedCard';

function HomeAdvertisers() {
  return (
    <>
        <div className='d-flex flex-column Advertisers col-12 container'>
        <p className='fs-3 text-dark'>Switzpay for Advertisers</p>
        <div className='container d-lg-flex flex-lg-row justify-content-lg-evenly col-12 mt-20'> 
            <BlueCard cardTitle="Predetermined costs" />
            <YellowCard cardTitle="Increased efficiency" />
            <RedCard cardTitle="Flexibility" />
        </div>
        </div>
    </>
  )
}

export default HomeAdvertisers

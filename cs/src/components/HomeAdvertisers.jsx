import React from 'react';
import BlueCard from './BlueCard';
import YellowCard from './YellowCard';
import RedCard from './RedCard';

function HomeAdvertisers() {
  return (
    <>
        <div className='d-flex flex-column Advertisers col-12 container'>
        <p className='fs-3 text-dark text-lg-start  text-md-center text-sm-center text-center'>Switzpay for Advertisers</p>
        <div className='container d-lg-flex d-md-flex d-d-sm-flex d-flex flex-lg-row flex-md-column flex-sm-column flex-column justify-content-lg-evenly justify-content-md-center justify-content-center col-12 mt-20'> 
            <BlueCard cardTitle="Predetermined costs" />
            <YellowCard cardTitle="Increased efficiency" />
            <RedCard cardTitle="Flexibility" />
        </div>
        </div>
    </>
  )
}

export default HomeAdvertisers

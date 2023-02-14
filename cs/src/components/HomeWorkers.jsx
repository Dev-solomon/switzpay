import React from 'react'; 
import RedCardW from './RedCard-w';
import YellowCardW from './YellowCard-w';
import BlueCardW from './BlueCard-w';

function HomeWorkers() {
  return (
    <>
        <div className='d-flex flex-column Advertisers col-12 container'>
        <p className='fs-3 text-dark'>Switzpay for Workers</p>
        <div className='container d-lg-flex flex-lg-row justify-content-lg-evenly col-12 mt-20'> 
            <BlueCardW cardTitle="Great Flexibility" />
            <YellowCardW cardTitle="High Earning potential" />
            <RedCardW cardTitle="Variety of Offers" />
        </div>
        </div>
    </>
  )
}

export default HomeWorkers

import React from 'react';
import '../assets/styles/HomeCards.css';
import calculator from '../assets/imgs/calculator.png';

function BlueCard({cardTitle}) {
  return (
    <div className='col-4 blue-card d-flex flex-column justify-content-center'>
        <div className='card-icon mx-auto blue'><img src={calculator} alt="card-icon" style={{width: "30px"}} /></div>

        <p className='text-center cardTitle'> { cardTitle } </p>

        <i className='text-center'>Pay for specific actions, such as a sale <br/> or lead, rather than paying for <br/> impressions or clicks.</i>
      
    </div>
  )
}

export default BlueCard

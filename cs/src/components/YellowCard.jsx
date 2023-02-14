import React from 'react';
import '../assets/styles/HomeCards.css';
import statusUp from '../assets/imgs/status-up.png';

function Yellowcard({cardTitle}) {
  return (
    <div className='col-4 yellow-card d-lg-flex flex-column justify-content-center'>
        <div className='card-icon mx-auto yellow'><img src={statusUp} alt="card-icon" style={{width: "30px"}} /></div>

        <p className='text-center cardTitle'> { cardTitle } </p>

        <i className='text-center'> Focus on converting leads rather than <br/> acquiring them, making the advertising <br/> process more efficient.</i>
    </div>
  )
}

export default Yellowcard

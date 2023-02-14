import React from 'react';
import '../assets/styles/HomeCards.css';
import hierarchy from '../assets/imgs/hierarchy-2.png';

function BlueCardW({cardTitle}) {
  return (
    <div className='col-4 blue-card d-flex flex-column justify-content-center'>
        <div className='card-icon mx-auto blue'><img src={hierarchy} alt="card-icon" style={{width: "30px"}} /></div>

        <p className='text-center cardTitle'> { cardTitle } </p>

        <i className='text-center'>Work from anywhere, as long as <br/> you have an internet connection, <br/>
        which provides a great deal  of <br/> flexibility and freedom.
        </i>
      
    </div>
  )
}

export default BlueCardW

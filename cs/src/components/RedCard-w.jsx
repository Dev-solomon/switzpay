import React from 'react';
import '../assets/styles/HomeCards.css';
import square from '../assets/imgs/element-4.png'

function RedCardW({cardTitle}) {
  return (
    <div className='col-4 red-card d-lg-flex flex-column justify-content-center'>
       <div className='card-icon mx-auto red mt-3'><img src={square} alt="card-icon" style={{width: "30px"}} /></div>

        <p className='text-center cardTitle'> { cardTitle } </p>

        <i className='text-center mb-3'>Wide range of offers, allowing <br/> you to find products and services <br/>
            that align with your interests and <br/> passion.
        </i>
    </div>
  )
}

export default RedCardW

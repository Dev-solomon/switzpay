import React from 'react';
import '../assets/styles/HomeCards.css';
import hierarchy from '../assets/imgs/hierarchy-2.png'

function RedCard({cardTitle}) {
  return (
    <div className='col-4 red-card d-lg-flex flex-column justify-content-center'>
       <div className='card-icon mx-auto red mt-3'><img src={hierarchy} alt="card-icon" style={{width: "30px"}} /></div>

        <p className='text-center cardTitle'> { cardTitle } </p>

        <i className='text-center mb-3'>Test multiple offers and campaigns <br/> with minimal risk, optimize marketing strategy for  maximum returns.</i>
    </div>
  )
}

export default RedCard

import React from 'react';
import '../assets/styles/HomeCards.css';
import wallet from '../assets/imgs/wallet-add.png';

function YellowCardW({cardTitle}) {
  return (
    <div className='col-4 yellow-card d-lg-flex flex-column justify-content-center'>
        <div className='card-icon mx-auto yellow'><img src={wallet} alt="card-icon" style={{width: "30px"}} /></div>

        <p className='text-center cardTitle'> { cardTitle } </p>

        <i className='text-center'>Higher commission than other <br/> affiliate marketing programs, which <br/>
            provides you with a significant <br/> income stream.
        </i>
    </div>
  )
}

export default YellowCardW

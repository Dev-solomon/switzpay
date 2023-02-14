import React from 'react';
import '../assets/styles/Info.css';
import info from '../assets/imgs/infocircle.png';

function Info() {
  return (
    <div className='d-flex flex-column justify-content-center container-fluid info'>
        <span className='text-center text-white'> <img src={info} alt='infoSign' style={{marginRight: "5px"}} /> Info!</span>
        <span className='text-center text-white'>In the age of technology, there is constant access to vast amounts of information.</span>
      
    </div>
  )
}

export default Info

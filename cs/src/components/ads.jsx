import React from 'react';
import ads from '../assets/imgs/ads.png';

function AdPost() {
  return (
    <div className='container col-12 mx-auto'>
      <img src={ads} alt="ads" style={{height: "200px", marginTop: "20px", width: "inherit"}} />
    </div>
  )
}

export default AdPost

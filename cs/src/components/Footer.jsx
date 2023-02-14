import React from 'react';
import instagram from '../assets/imgs/mdi_instagram.png';
import switz_logo from '../assets/imgs/Rectangle.png';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <div className='footer container-fluid d-flex flex-column justify-content-center'>
      <div className='container col-6 d-flex flex-row justify-content-evenly'>
        <p><a href='/about-us' className='link-footer'>About us</a></p>
        <p><a href='/admin'  className='link-footer'>Admin</a></p>
        <p><a href='/contact-us'  className='link-footer'>Contact us</a></p>
        <p><a href='/privacy-policy'  className='link-footer'>Privacy policy</a></p>
      </div>
      <div className='container col-3 d-flex flex-row justify-content-evenly mx-auto'>
            <div>
            <img src={ instagram } alt='instagram-link'/>
            </div>
            
            <div>
                <img  src={switz_logo} alt="switzpay-logo" />
            </div>
      </div>
    </div>
  )
}

export default Footer

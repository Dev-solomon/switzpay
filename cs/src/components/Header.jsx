import React from 'react'
import switzpay from '../assets/imgs/Rectangle.png';
import '../assets/styles/Header.css';

function Header() {
  return (
    <div className='Header d-lg-flex flex-lg-row justify-content-between'>
        <div className='header-logo col-4'>
            <img  src={switzpay} alt="switzpay-logo" />
        </div>
        <div className='nav-links d-lg-flex flex-lg-row justify-content-lg-evenly col-lg-6'> 
            <a href='/'>Home</a> 
            <a href='/'>About us</a> 
            <a href='/'>Contact</a> 
            <button className='login-button'>Login</button>
            <button className='signup-button'>Signup</button>

        </div>
      
    </div>
  )
}

export default Header


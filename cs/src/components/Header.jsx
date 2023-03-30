import React from 'react'
import switzpay from '../assets/imgs/Rectangle.png';
import '../assets/styles/Header.css';
import menu from '../assets/imgs/menu.png';

function Header() {
  return (
    <div className='Header d-lg-flex d-md-flex d-sm-flex d-flex flex-lg-row flex-md-row flex-sm-row flex-row justify-content-between'>
        <div className='header-logo col-4'>
            <img  src={switzpay} alt="switzpay-logo" />
        </div>
        <div className='nav-links d-lg-flex d-md-none d-none d-sm-none flex-lg-row justify-content-lg-evenly col-lg-6'> 
            <a href='/'>Home</a> 
            <a href='/'>About us</a> 
            <a href='/'>Contact</a> 
            <button className='login-button'><a href='login'>Login</a></button>
            <button className='signup-button'>Signup</button>

        </div>

        <div className='d-lg-none d-d-md-block d-sm-block d-block'>
           <i> <img src={menu} alt="menu" /></i>
        </div>
      
    </div>
  )
}

export default Header


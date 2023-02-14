import React from 'react';
import '../assets/styles/Hero.css';
import heroPic from '../assets/imgs/hero-pic.png';

function Hero() {
  return (
    <div className='container d-lg-flex flex-lg-column justify-content-lg-center hero-section'>
        <p className='caption col-12 text-lg-center'>
            Achieve Business & Financial <br/> <span className='text-info'>Success</span> through our CPA <br/> Marketing platform
        </p>
        
        <p className='caption-title col-10 mx-auto'>
             High available offers, easy tasks with massive earnings on switzpay. We help workers make sustainable passive income through micro-jobs 
             and bring customers closer to company products! Trusted by more than 12k users worldwide with affiliated Organisations.
        </p>

        <button className='caption-button text-lg-center mx-auto'>Get Started</button>

        <div className='caption-picture col-12 mx-auto container'>
          <img src={heroPic} alt='caption-pix' />
        </div>
      
    </div>
  )
}

export default Hero

import React from 'react';
import offerpage from '../assets/imgs/Offers-page.png';
import '../assets/styles/WhyUs.css';

function WhyUs() {
  return (
    <div className='d-lg-flex flex-lg-row justify-content-lg-between container col-12 why-us '>
        <div className='d-flex flex-column justify-content-start content'>
        <p className='fs-3 text-dark'>Why Switzpay?</p>

        <p>Switzpay gives access to tasks that require minimal effort, is <br/> not overly burdensome, and has the potential to generate <br/>
        significant revenue for users within a single month. The <br/> simplicity and efficiency of the task, combined with the <br/>
        potential for high revenue, makes it an attractive opportunity for <br/> those looking to earn in a relatively short amount of time.</p>

        </div>

        <div className='why-img'>
        
            <img src={offerpage} alt="offers-page" />
            <div id='offer-under'></div>
            
        </div>
      
    </div>
  )
}

export default WhyUs

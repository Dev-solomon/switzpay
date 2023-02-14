import React from 'react';
import '../assets/styles/AdvertiserWorks.css';

function AdvertiserWorks() {
  return (
    <div className='d-lg-flex flex-lg-row justify-content-lg-between container col-12'>
        <div className='col-6 d-lg-flex flex-lg-column justify-content-lg-start'>
            <div className='works-description '> 
                <p className='fs-5 text-dark title'>How it works</p>

                <p className='content'>
                    Advertisers willing to test, carry out surveys and get users more <br/>
                    closer to their product, simply send a message via the chat box after signUp <br/>
                    or fill the contact form and receive a response within 48hrs.
                </p>

                <h2>
                    Do you want clients, subscribers or <br/>
                    customers?
                </h2>
            </div>

            <button className='buttonAD'>Be an Advertiser</button>

        </div>

        <div className='sign-description col-5 d-lg-flex flex-flex-lg-row justify-content-lg-evenly'>
            <div className='d-lg-flex flex-lg-column'>  
                <i className='num text-center'>1</i>
                <i className='text-center'>Signup</i>
            </div>
            {/* &mdash; &rsaquo; */}
            <div className='d-lg-flex flex-lg-column'>  
                <i className='num text-center'>2</i>
                <i className='text-center'>Post Offers</i>
            </div>
            {/* &mdash; &rsaquo; */}
            <div className='d-lg-flex flex-lg-column'>  
                <i className='num text-center'>3</i>
                <i className='text-center'>Get Results</i>
            </div>

        </div>
      
    </div>
  )
}

export default AdvertiserWorks

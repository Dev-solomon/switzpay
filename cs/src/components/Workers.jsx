import React from 'react';
import '../assets/styles/Workers.css';

function Workers() {
  return (
    <div className='d-lg-flex flex-lg-row justify-content-lg-between container col-12'> 
        
        <div className='col-6 d-lg-flex flex-lg-column justify-content-lg-start'>
            <div className='works-description '> 
                <p className='fs-5 text-dark title'>How it works</p>

                <p className='content'>
                    Our platform provides a unique opportunity for workers to <br/> increase their earning potential by completing simple tasks that <br/>
                    are made available to them after they register.
                </p>

                <h2>
                    Want to earn money by doing <br/>
                   online activities?
                </h2>
            </div>

            <button className='buttonAD'>Be a Worker</button>

        </div>



        <div className='sign-description col-5 d-lg-flex flex-flex-lg-row justify-content-lg-evenly'>
            <div className='d-lg-flex flex-lg-column'>  
                <i className='num text-center'>1</i>
                <i className='text-center'>Signup</i>
            </div>
            {/* &mdash; &rsaquo; */}
            <div className='d-lg-flex flex-lg-column'>  
                <i className='num text-center'>2</i>
                <i className='text-center'>Do Offers</i>
            </div>
            {/* &mdash; &rsaquo; */}
            <div className='d-lg-flex flex-lg-column'>  
                <i className='num text-center'>3</i>
                <i className='text-center'>Get Paid</i>
            </div>

        </div> 
      
    </div>
  )
}

export default Workers

import React from 'react';
import '../assets/styles/Faqs.css';

function Faqs() {
  return (
    <>
    <p className="fs-3 text-dark container-fluid col-11 f">Frequently Asked Questions</p>
    <div className='faqs'>  
            <div className="container-fluid col-10 mx-auto accordion" id="myAccordion">
            
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne"><i className='number'>01</i><p className='num-text'>How long does it take to withdraw my earnings?</p></button>									
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                    <p>Earnings Made are cashed out on a NET-30 basis and you are eligible for withdrawal once you have earned a minimum of 30 CHF. </p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"><i className='number'>02</i><p className='num-text'>How do I withdraw my earnings?</p></button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                <div className="card-body">
                    <p>On your dashboard beneath, Fill in your payment details and on passing the minimum threshold your payment is made automatically.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree"><i className='number'>03</i><p className='num-text'>How to complete Tasks!</p></button>                     
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                    <p>View a task, click and read carefully then complete it and afterwards check your LEADS-STATUS on that task to ensure you need it correctly.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFour"><i className='number'>04</i><p className='num-text'>How to post My Offers as an Advertiser?</p></button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                <div className="card-body">
                    <p> Are you an Advertiser? willing to make sales boost, or create awareness of your products to customers? Signup and message the support.
                     You will get a response soonest and we'll help you promote.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Faqs

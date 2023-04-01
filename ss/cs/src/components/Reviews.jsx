import React from 'react';
import '../assets/styles/Reviews.css';
import reviewPic from '../assets/imgs/star-review.png';
import Reviewcard from './Reviewcard';

function Reviews() {
    const names ={
        first: "Anna Diallo",
        second: "Michael Beckham"
    }

    const contents = {
        first: "switzpay itself is good and is paying for real, I joined and in two weeks I withdrew CHF 85 with simple tasks. Awesome platform.",
        second : "Pays fast, has a chat app for help, and lots of things to do to get rewarded. Honestly, this app surprised me and is worth the time."
    }
  return (
        <div className='d-flex flex-column container-fluid col-11'>
            <p className='fs-5 text-dark'>Reviews from Our Customers</p>
            <div className='d-lg-flex flex-lg-row justify-content-lg-evenly'>
                <div className='review-img'>
                    <img src={reviewPic} alt="stars-review"/>
                </div>

                <div className='customer-reviews d-lg-flex flex-lg-row justify-content-lg-evenly'>
                    <Reviewcard name={ names.first } content={ contents.first } />
                    <Reviewcard name={ names.second } content={ contents.second } />

                </div>
            
            </div>
         
    </div>
  )
}

export default Reviews

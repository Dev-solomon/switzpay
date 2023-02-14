import React from 'react';
import '../assets/styles/Reviews.css';


function Reviewcard({content, name}) {
  return (
    <div className='d-flex flex-column justify-content-end review-card col-5 my-auto'>
        <i className='fs-2'>&ldquo;</i>

        <p className='text-start'> { content } </p>

        <span> { name } </span> 
    </div>
  )
}

export default Reviewcard

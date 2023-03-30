import React from 'react';
import '../assets/styles/BlogRead.css'; 
import { FaInstagram } from 'react-icons/fa';
import ads from '../assets/imgs/ads.png';

function BlogRead() {
    
  return (
    <> 
        <div className='container-fluid modal fade mx-auto' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header d-flex flex-column'>
                            <h5 className='modal-title text-primary text-start fs-4' id='exampleModalLabel'>Leeds name Javi Gracia as new manager</h5>
                            <p>POSTED: 13th February, 2023<span style={{marginLeft: "10px", fontSize: "25px"}}><FaInstagram style={{color: "red"}} /></span></p>
                        </div>
                        <div className='modal-body d-flex flex-column'>
                            <div className='container-fluid mx-auto blog-image'><img src={ads} alt="blog-post"/></div>
                            <div className='blog-content' style={{marginTop: "7px"}}>
                            Leeds on Tuesday announced the appointment of former Watford boss Javi Gracia as the new manager of the relegation-threatened Premier League club.The Spaniard, who led the Hornets to the 2019 FA Cup final, has signed what Leeds described as a “flexible” contract to replace Jesse Marsch, who was sacked earlier this month.
“Leeds United are delighted to announce the club have agreed terms with Javi Gracia to become men's first team head coach, subject to obtaining a work permit,” the club said in a statement.

“The experienced 52-year-old has agreed a flexible contract at Elland Road.”

Leeds had been linked with other well regarded coaches Andoni Iraola, Arne Slot and Alfred Schreuder.
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Close</button> 
                        </div>
                    </div>
            </div>
        </div> 
    </>
  )
}

export default BlogRead

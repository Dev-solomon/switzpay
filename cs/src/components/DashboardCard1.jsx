import React, { Component } from 'react';
import '../assets/styles/DashboardCards.css';
import cash from '../assets/imgs/moneys.png';
import swiss from '../assets/imgs/swiss-franc.png';

export class DashboardCard1 extends Component {
  render() {
    return (
      <div className="total-earned d-flex flex-column col-4">
        <div className='d-flex flex-column justify-content-start'>
          <p>Total Amount Earned</p>
           <p><img src={cash} alt="cash" className='cash'  />  <span className="price my-auto"><img src={swiss}  alt="swiss"/> 48.6 </span></p>
        </div>

         <div className='d-flex flex-column justify-content-end amp'>
          <p>Total Amount Paid</p>
           <p><img src={cash} alt="cash" className='cash'  />  <span className="price my-auto"><img src={swiss}  alt="swiss"/> 20 </span> </p>
        </div> 
      </div>
    ) 
  }
}

export default DashboardCard1

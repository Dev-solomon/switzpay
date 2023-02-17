import React, { Component } from 'react';
import '../assets/styles/DashboardCards.css'; 
import reddot from '../assets/imgs/Color1.png';
import line from '../assets/imgs/Line.png';
import arrow from '../assets/imgs/arrow-down2.png';

 class DashboardCard3 extends Component {
  render() {
    return (
      <div className='leads d-flex flex-column col-4'>
      <div className='d-flex flex-row justify-content-between'>
        <p>Total Leads</p>
        <span>Filter<img src={arrow} className="filter" alt='filter' />  </span>
      </div>
      <div>
        <img src={reddot} alt="dot" className='dot' />Current Month
      </div>
      <div>
        <img src={line} className="chart" alt="chart" />
      </div>
    </div>
    )
  }
}

export default DashboardCard3

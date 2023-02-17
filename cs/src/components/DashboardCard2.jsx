import React, { Component } from 'react';
import '../assets/styles/DashboardCards.css';
import arrow from '../assets/imgs/arrow-down2.png';
import bluedot from '../assets/imgs/Color.png';
import chart from '../assets/imgs/chart.png';

export class DashboardCard2 extends Component {
  render() {
    return (
      <div className='clicks d-flex flex-column col-4'>
        <div className='d-flex flex-row justify-content-between'>
          <p>Clicks</p>
          <span>Filter<img src={arrow} className="filter" alt='filter' />  </span>
        </div>
        <div>
          <img src={bluedot} alt="dot" className='dot' />Daily Clicks
        </div>
        <div>
          <img src={chart} className="chart" alt="chart" />
        </div>
      </div>
    )
  }
}

export default DashboardCard2

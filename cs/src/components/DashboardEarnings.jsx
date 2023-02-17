import React, { Component } from 'react'; 
import DashboardCard1 from './DashboardCard1';
import DashboardCard2 from './DashboardCard2';
import DashboardCard3 from './DashboardCard3';

export class DashboardEarnings extends Component {
  render() {
    return (
        <>
        <div className='fs-3 text-dark container dashboard'>Dashboard</div>
      <div className='d-lg-flex flex-lg-row justify-content-lg-evenly container'>
        <DashboardCard1/>
        <DashboardCard2/>
        <DashboardCard3/>
      </div>
      </>
    )
  }
}

export default DashboardEarnings

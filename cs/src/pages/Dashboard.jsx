import React, { Component } from 'react';
import LoginHeader from '../components/LoginHeader';
import Info from '../components/Info';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <LoginHeader/>
        <Info/>
        
      </div>
    )
  }
}

export default Dashboard

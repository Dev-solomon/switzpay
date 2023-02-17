import React, { Component } from 'react';
import LoginHeader from '../components/LoginHeader';
import Info from '../components/Info';
import DashboardEarnings from '../components/DashboardEarnings';
import AdPost from '../components/ads';
import { PostCards } from '../components/PostCard';
import UserChat from '../components/UserChat'; 


export class Dashboard extends Component {
  render() {
    return (
      <div>
        <LoginHeader/>
        <Info/>
        <DashboardEarnings/>
        <AdPost/> 
        <PostCards/>
        <UserChat/>
      </div>
    )
  }
}

export default Dashboard

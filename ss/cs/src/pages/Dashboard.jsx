import React, { Component } from 'react';
import LoginHeader from '../components/LoginHeader';
import Info from '../components/Info';
import DashboardEarnings from '../components/DashboardEarnings';
import AdPost from '../components/ads';
import { PostCards } from '../components/PostCard';
import UserChat from '../components/UserChat'; 
import BlogRead from '../components/BlogRead';


export class Dashboard extends Component {
  // constructor(props) {
  //   super(props); 

  //    this.displayData = this.displayData.bind(this);
  // }     

  componentDidMount(){
    this.displayData();
 
  }  

  displayData = () => { 
   const cookieValue = document.cookie.split('; ').filter(row => row.startsWith('access_token=')).map(c=>c.split('=')[1])[0];

    console.log(document.cookie);
    console.log(cookieValue);
    console.log('hello');

  }

  render() {
    return (
      <div>
        <LoginHeader/>
        <Info/>
        <DashboardEarnings/>
        <AdPost/> 
        <PostCards/>
        <BlogRead/>
        <UserChat/>
      </div>
    )
  }
}

export default Dashboard

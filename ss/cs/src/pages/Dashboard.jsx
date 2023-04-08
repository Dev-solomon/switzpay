import React, { Component } from 'react';
import LoginHeader from '../components/LoginHeader';
import Info from '../components/Info';
import DashboardEarnings from '../components/DashboardEarnings';
import AdPost from '../components/ads';
import { PostCards } from '../components/PostCard';
import UserChat from '../components/UserChat'; 
import BlogRead from '../components/BlogRead';
import Cookies from 'js-cookie';
import axios from 'axios';


export class Dashboard extends Component {
  constructor(props) {
    super(props); 

     this.state = {
      username: ""
     }
  }     

  componentDidMount(){
    this.displayData();
 
  }  

  displayData = () => { 

  const name = Cookies.get('access_token'); 

  axios
  .post(`http://localhost:5000/getDisplayData`, {
    headers: {
      Cookie: `access_token=${name}`
    }
  })
  .then(res => {
    this.setState({ username: res.data.bMessage })
  })
  .catch(err => console.error(err));

    console.log(name); 
    
  }

  render() {
    return (
      <div>
        <LoginHeader name={ this.state.username }/>
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

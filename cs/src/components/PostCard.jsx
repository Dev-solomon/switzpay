import React, { Component } from 'react';
import '../assets/styles/PostCard.css';
import cardimg from '../assets/imgs/logo.jpg';

export class PostCard extends Component {
  render() {
    return (
      <div className='col-3 container d-flex flex-column justify-content-start post-card'>
      <img src={cardimg} alt="cardimage" className="img-fluid post-image" /> 

      <h3 className="post-title">Lorem Ipsum Title</h3>
      <p className='post-content'>This is a new title stuff that is just written to fill the empty space</p>

      <span><a href='*Alfred' data-bs-toggle="modal" data-bs-target="#exampleModal">Read...</a></span>

        
      </div>
    )
  }
} 

function PostCards() {
  return (
    <div className='container d-flex flex-column' style={{marginBottom: "30px"}}>
    <p className='fs-4 fw-bold' style={{marginTop: "20px", color: "#0EA4F2"}}>Blogposts</p>
    <div className='d-flex flex-row justify-content-evenly'>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>

    <div className='d-flex flex-row justify-content-evenly'>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
      
    </div>
  )
} 


export { PostCards }

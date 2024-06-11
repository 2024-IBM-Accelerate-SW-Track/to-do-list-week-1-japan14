import React, { Component } from 'react';
import "./About.css";
import jaunel_headshot from "../assets/jaunel_headshot.png";


export default class About extends Component {
  render() {
    return (
      <>
      <div className="split left">
      <div className="name_title">
      <div className="centered">
        <h2>Hey there, my name is Jaunel!</h2> 
      </div>
      </div>
      </div>

      <div className = "split right">
      <div className="centered">
        
      </div>

      <div className = "split_left">
      <img className="profile_image" src={jaunel_headshot} alt="Profile Pic">
      </img>
        <div className="brief_description">
          <ul>I am a Junior Computer Science major at Morgan State University</ul>
          <ul>I am from Jamaica!</ul>
          <ul>I enjoy playing The Sims 4, reading, and visiting the beach or river.</ul> 
        </div>

      </div>
      </div>
      </>
    )
  }
}

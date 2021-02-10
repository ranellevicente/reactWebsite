import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import profilePicture from '../images/Profile Picture revised.png'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <img src= {"/hackbg.jpg"} alt=''/> */}
      <img src={profilePicture} className='profile-picture' alt="Avatar"></img>
      <h1>RJ's Portfolio</h1>
      <p>Software Engineer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET TO KNOW ME
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
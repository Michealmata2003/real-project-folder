import React from 'react';
import { NavLink } from 'react-router-dom';
import video from '../images/background2.mp4'
import './Styles/Slide.css';


function Slide() {

  return (
    <div className='slider'>
      <div className='slide'>
        <video autoPlay loop muted id='video'>
          <source src={video} type='video/mp4' />
        </video>
        <div className='slide-text'>
          <h1>Endless movies, TV shows, and more.</h1>
          <p>The movies are from biggest movies source in the world</p>
          <NavLink to='/'>
            <button>Get Started</button>
          </NavLink>
        </div>

      </div>

    </div>
  );
}

export default Slide;

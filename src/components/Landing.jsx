import { useNavigate, Router} from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
// import logo1 from './src/assets/logo1.mp4';
import './css/Landing.css';
import './css/Navbar.css';


function Landing() {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
      </style>

      <div className='nav-bar'>
        <Navbar />
        {/* <Dropdown /> */}
      </div>
      <div className='main-land-div' style={{
          
          // backgroundSize: 'cover',
        height: '100vh',
        // boxShadow: '0px 10px 20pz rgba(255,255,255,0.6)',
        // borderRadius: '50% / 0 0 30% 30%',
      }}>
        {/* <div><img src={logo1} alt="Example GIF" /></div> */}
        <div className='h-div-land'> 
          <h1>Come n Explore</h1>
          <h1>The greatest</h1>
          <h1>Celebs</h1>
        </div>
        <div className='p-div-land'> 
          <p>Lorem ipsum dolor sit amet adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className='btn-div-land'>
          <button className='explore-btn-land'>Explore Events</button>
        </div>
      </div>
      <div className="container">
        <div className='div1'>
        <div id='section1' className='box1'>
          <h2>Event Organising</h2>
        </div>
        <div id='section2' className='box2'>
          <h2 className="left-h2">Social Media Handling</h2>
        </div>
        </div>
        
        <div className='divx'>
        <div id='section3' className='box3'>
          <h2>Sustained Audience</h2>
        </div>
        <div id='section4' className='box3'> 
          <h2>Campaign Automation</h2>
        </div>
        </div>
        <div id='section5' className='about-us-div'> 
          <h1>About Us</h1>
          <p>At TrecNoc, we're on a mission to empower
individuals and businesses in the digital realm.
We believe in making online content management
effortless and events extraordinary, enabling our
users to shine in the ever-evolving online
landscape.</p>
        </div>
        <div id='section6'> 
          <h2>Contact</h2>
          
        </div>
      </div>
    </div>
  );
}

export default Landing;
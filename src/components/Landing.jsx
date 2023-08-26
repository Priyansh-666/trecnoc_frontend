import { useNavigate, Router } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
// import logo1 from './src/assets/logo1.mp4';
import './css/Landing.css';
import './css/Navbar.css';
import bulbImg from '../assets/bulb.png';
import calender from '../assets/cal.png';

function Landing() {

  const navigate = useNavigate();
  const Explore = () => {
    navigate('/explore', { replace: true })
  }

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
          <h1>Empower your</h1>
          <h1>Community with</h1>
          <h1>TrecNoc</h1>
        </div>
        <div className='p-div-land'>
          <p>TrecNoc opens doors to community growth, encouraging </p>
          <p>Discovery , Creation and Expansion</p>
          {/* <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet..</p> */}
        </div>
        <div className='btn-div-land'>
          <button className='explore-btn-land' onClick={Explore}>Explore Events</button>
        </div>
      </div>
      <div className="container">
        <div className='subh-main' id='subh-id'>
          <div className='subh1'>
            <h2>Want to start your own event?</h2>
            <h3>check out our pricing!</h3>
          </div>
          <div className='subh2'>
            <img src={calender} alt="" />
          </div>
        </div>
        <div id="lp-sub">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
          <div className='cards-container'>

            <div className='sub-cards freez lp-sub-cont' style={{ backgroundColor: "#191a1e", color: "#cccccc" }}>
              <h5 style={{ color: "gray" }}>Basic Plan</h5>
              <div className='duration'>
                <span>Free</span>
              </div>
              <ul className='free'>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>1 event</span>
                </li>
                <li className='line-thru' style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>AI generated picture / event</span>
                </li>
                <li className='line-thru' style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>Unlimited AI generated Title's</span>
                </li>
                <li className='line-thru' style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>Automatic social media posting</span>
                </li>
                <li className='line-thru' style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>Access to influencers</span>
                </li>
              </ul>
              {/* <button>Choose Plan</button> */}
            </div>

            <div className='sub-cards paid lp-sub-cont' style={{ backgroundColor: "#191a1e", color: "#cccccc" }}>
              <h5 style={{ color: "gray" }}>Pro</h5>
              <div className='duration'>
                <span>$</span>
                <span>9</span>
                <span>/month</span>
              </div>
              <ul className='pro'>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">
                    check_circle
                  </span>
                  <span>1 event</span>
                </li>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>AI generated picture / event</span>
                </li>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>Unlimited AI generated Title's</span>
                </li>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span className='line-thru'>Automatic social media posting</span>
                </li>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span className='line-thru'>Access to influencers</span>
                </li>
              </ul>
              {/* <button>Choose Plan</button> */}
            </div>
            <div className='sub-cards paid lp-sub-cont' style={{ backgroundColor: "#191a1e", color: "#cccccc" }}>
              <h5 style={{ color: "gray" }}>Premium</h5>
              <div className='duration'>
                <span>$</span>
                <span>20</span>
                <span>/month</span>
              </div>
              <ul className='premium'>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>1 event</span>
                </li>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>AI generated picture / event</span>
                </li>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>Unlimited AI generated Title's</span>
                </li>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>Automatic social media posting</span>
                </li>
                <li style={{ color: "gray" }}>
                  <span class="material-icons">check_circle</span>
                  <span>Access to influencers</span>
                </li>
              </ul>
              {/* <button>Choose Plan</button> */}
            </div>
          </div>
        </div>

        <div id='section5' className='about-us-div'>
          <div className='aboutus1'>
            <h1>About Us</h1>
            <p>

              Welcome to TrecNoc, where we're passionate about fostering connections and experiences.</p>
              <h4><strong>Our Mission:</strong></h4>
              <p>
              At TrecNoc, our mission is simple yet powerful: to empower communities to come together, create memorable moments, and expand their horizons. We believe that every community, no matter how big or small, deserves the tools to make their events shine.
              </p>
              <h4><strong>What we offer:</strong></h4>
              <p>
              TrecNoc is your platform for bringing people together. We provide the canvas for you to paint your vision, whether it's an intimate gathering or a large-scale event. With us, you can discover exciting opportunities, create lasting memories, and expand your community like never before.

              </p>
              <p><strong>

              Join us on this journey of discovery, creation, and expansion. Let's make your community's moments truly special.</strong></p>

             <p><strong> Explore TrecNoc today and start creating your own unique experiences.</strong></p>
          </div>
          <div className='imgdivaboutus'>
            <img src={bulbImg} alt="" />
          </div>
        </div>

        <div id='section6'>
          <h2>Contact</h2>

        </div>
      </div>
    </div>
  );
}

export default Landing;
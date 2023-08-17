import React, { useState, useEffect } from 'react';
import './css/Explore.css';
import abc from '../assets/sample.jpg';
import './css/Card.css';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const options = {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const currentTime = new Date();
  var timeZoneOffset = currentTime.getTimezoneOffset();
  currentTime.setMinutes(currentTime.getMinutes() - timeZoneOffset);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await fetch(`${process.env.REACT_APP_API_NAVIGATION}/getevent`).then(res =>
        res.json()
      );

      setEvents(allEvents);
    };



    fetchEvents();
  }, []);

  const navtodetails = event => {
    const eventId = event._id;
    navigate(`/event-detail/${eventId}`);
  };

  const handleBack = () => {
    navigate(`/landing`);
  };

  const handleSearch = () => {
    console.log('Perform search');
  };

  return (
    <div>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
      </style>
      <div className='explore-main-div'>
        <nav className="navbar nav-expand">
          <div className="navbar-back">
            <button className='light' onClick={handleBack}>Go Back</button>
          </div>
          <div className="navbar-search">
            <input type="text" placeholder="Search..." />
            <button className='light' onClick={handleSearch}>Search</button>
          </div>
        </nav>
      </div>

      <div className="head">
        {events.map(event => (
          <div onClick={() => navtodetails(event)} className="card" key={event._id}>
            <div
              className="cardin"
              // style={{
              //   backgroundImage: `url(${abc})`,
              //   backgroundSize: 'cover',
              // }}
            >
              <div className='tn'
              style={{
                backgroundImage: `url(${abc})`,
                backgroundSize: 'cover',
              }}
              >
              </div>
            </div>

            <div className='card-text'>
              <h2>{event.title}</h2>
              <p className='carddesc'>{event.description}</p>
              <br /><br /><br />
              <p className='timecard'>{new Date(new Date(event.date).getTime() + timeZoneOffset * 60 * 1000).toLocaleString("en-US", options)}</p>
              <p className='cardsignups'>{event.signups} Signups</p>
            </div>
            {/* <br /> */}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Explore;

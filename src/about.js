import React from 'react';
import Nav from './nav';
import Abu from "./about us.jpeg";

const containerStyle = {
  padding: '50px',
  backgroundColor: '#f7f7f7',
  textAlign: 'center',
};

const card = {
  border: "4px double #FF9800",
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "30px",
  margin: "30px auto",
  maxWidth: '800px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
};

const headlineStyle = {
  fontSize: '36px',
  color: '#FF9800',
  marginBottom: '20px',
};

const subHeadlineStyle = {
  fontSize: '24px',
  color: '#333',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '18px',
  color: '#555',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const imgStyle = {
  height: '400px',
  borderRadius: '10px',
  marginTop: '30px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

function About() {
  return (
    <>
      <Nav />
      <div style={containerStyle}>
        <div style={card}>
          <h1 style={headlineStyle}>About Us</h1>
          <h2 style={subHeadlineStyle}>Your Trusted Travel Partner</h2>
          <p style={paragraphStyle}>
            At <strong>Travel</strong>, we believe that travel is more than just visiting new places—it's about creating lifelong memories and experiencing the world in a way that's unique to you. 
          </p>
          <p style={paragraphStyle}>
            Founded by a group of travel enthusiasts, our mission is to help you discover your next adventure with ease and confidence. Whether you're a solo traveler, a family on vacation, or someone seeking thrill and excitement, we offer personalized travel experiences tailored just for you.
          </p>
          <p style={paragraphStyle}>
            Join us on a journey to explore the hidden gems of the world, from tranquil beaches and bustling cities to remote mountains and cultural landmarks. Let's make every trip an unforgettable story.
          </p>
        </div>
        <img src={Abu} style={imgStyle} alt="Travel Experience" />
      </div>
    </>
  );
}

export default About;

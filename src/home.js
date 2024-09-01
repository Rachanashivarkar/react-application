import React from 'react';
import Nav from './nav';
import Img from "./travel.jpeg";

const homeStyle = {
  textAlign: 'center',
  padding: '50px',
  backgroundColor: '#f2f2f2',
  borderRadius: '10px',
  margin: '20px',
};

const imgStyle = {
  height: '500px',
  borderRadius: '10px',
  marginTop: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

function Home() {
  return (
    <div style={homeStyle}>
      <Nav />
      <h1>Explore the World with Us</h1>
      <p>Welcome to our travel site, your gateway to discovering new adventures and unforgettable experiences. Whether you're planning a relaxing beach getaway, a cultural exploration, or a thrilling outdoor adventure, we have the perfect destination for you.</p>
      <p>Our mission is to make travel easy, accessible, and enjoyable for everyone. Browse through our curated travel packages, tips, and guides to start planning your dream vacation today!</p>
      <img src={Img} style={imgStyle} alt="Travel Image" />
    </div>
  );
}

export default Home;

import React from 'react';
import Nav from "./nav";

const containerStyle = {
  padding: '40px',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: '#f4f4f4',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headlineStyle = {
  fontSize: '32px',
  marginBottom: '20px',
  textAlign: 'center',
  color: '#333',
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#555',
  marginBottom: '20px',
};

const contactDetailsStyle = {
  marginBottom: '20px',
};

const contactLabelStyle = {
  fontWeight: 'bold',
  color: '#333',
};

const linkStyle = {
  color: '#FF9800',
  textDecoration: 'none',
};

function Contact() {
  return (
    <div>
      <Nav />
      <div style={containerStyle}>
        <h1 style={headlineStyle}>Get in Touch</h1>
        <p style={paragraphStyle}>
          We'd love to hear from you! Whether you have a question about our services, need assistance with planning your next trip, or just want to share your travel stories, our team is here to help.
        </p>
        <div style={contactDetailsStyle}>
          <p style={contactLabelStyle}>Email:</p>
          <p><a href="mailto:info@traveltrove.com" style={linkStyle}>info@traveltrove.com</a></p>
        </div>
        <div style={contactDetailsStyle}>
          <p style={contactLabelStyle}>Phone:</p>
          <p>+1 234 567 890</p>
        </div>
        <div style={contactDetailsStyle}>
          <p style={contactLabelStyle}>Address:</p>
          <p>123 Travel Lane, Wanderlust City, Adventureland</p>
        </div>
        <p style={paragraphStyle}>
          Our customer service team is available from Monday to Friday, 9 AM to 6 PM. We aim to respond to all inquiries within 24 hours.
        </p>
      </div>
    </div>
  );
}

export default Contact;

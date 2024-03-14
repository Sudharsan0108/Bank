import React, { useState } from 'react';
import './index.css'; 
import backgroundImage from './bank25.avif';

function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Log form data to console
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  return (
    <div className="enquiry-page" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="enquiry-form" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'left', // Align text to the left
        maxWidth: '500px', // Limit form width
        margin: '0 20px', // Add margin for slight left movement
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}><mark>Contact Us</mark></h1>
        <p style={{ textAlign: 'left', marginBottom: '20px' }}>Have questions or concerns? Fill out the form below and we'll get back to you as soon as possible.</p>
        {submitted ? (
          <div className="submission-message">
            <p>Thank you for your submission! We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', maxWidth: '100%' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', maxWidth: '100%' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', maxWidth: '100%' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} style={{ width: '100%', maxWidth: '100%' }} />
            </div>
            <button type="submit" style={{ width: '100%' }}>Submit</button>
          </form>
        )}
        <div className="contact-info" style={{ textAlign: 'center' }}>
          <h2>Contact Information</h2>
          <p>Email: info@canonbank.com</p>
          <p>Phone: +91 8525021641</p>
          <p>242, Trichy Road, Sulur, Coimbatore, TamilNadu, India</p>
        </div>
      </div>
    </div>
  );
}

export default EnquiryPage;

import React, { useState } from 'react';
import "./ticketBooking.scss"

const TicketBookingForm = ({ movieName, onCancel }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Your Booking is Sucessfull !!")
      setName('');
      setEmail('');
    };
  
    return (
      <div className="ticket-booking-form-container">
        <h2>Book Ticket</h2>
        <p>Movie: {movieName}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
          <button className='canBtn' onClick={onCancel}>Cancel</button>
        </form>
      </div>
    );
  };
  
  export default TicketBookingForm;
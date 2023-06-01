import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import TicketBookingForm from './TicketBookingForm';
import './showSummary.scss';
import { Link } from 'react-router-dom/dist';

const ShowSummary = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [showBookingForm, setShowBookingForm] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    const fetchSummary = async () => {
      // const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      // const data = await response.json();
      // setSummary(data.summary);
      fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
    };

    fetchSummary();
  }, [id]);
  


  const handleBookTicket = () => {
    // Set showBookingForm state to true to display the ticket booking form
    setShowBookingForm(true);
  };

  const handleCancelBooking = () => {
    // Set showBookingForm state to false to hide the ticket booking form
    setShowBookingForm(false);
  };

  return (
    <div className="summary">
      <Link to={"/"}>Home</Link>
    <div className="summaryContainer">
      
      <h2>{details.name}</h2>
      <p>{details.summary}</p>
      </div>  
      <div className="summaryContainer1">
      {!showBookingForm && (
        <button onClick={handleBookTicket}>Book Ticket</button>
      )}
      {showBookingForm && (
        <TicketBookingForm
          movieName={details.name} // Pass the movie name as a prop to the form component
          onCancel={handleCancelBooking} // Pass the onCancel function as a prop to the form component
        />
      )}
      </div>
    
    </div>
  );
};

export default ShowSummary;


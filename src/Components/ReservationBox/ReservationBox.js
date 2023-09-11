import React from 'react';
import './ReservationBox.css';

const ReservationCard = ({ reservation }) => {
  return (
    <div className='reservation-card'>
      <h2>{reservation.name}</h2>
      <p>Date: {reservation.date}</p>
      <p>Time: {reservation.time}</p>
      <p>Number of guests: {reservation.number}</p>
    </div>
  );
};

const ReservationBox = ({ reservations }) => {
  const cards = reservations.map((reservation) => {
    return <ReservationCard key={reservation.id} reservation={reservation} />;
  });
  
  return (
    <div className='resy-container'>
      {cards}
    </div>
  );
};

export default ReservationBox;

import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ reservation }) => {
  return (
    <article>
      <p>{reservation.name}</p>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
      <p>Number of guests: {reservation.number}</p> 
    </article>
  );
};

export default ReservationCard;

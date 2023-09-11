import React from 'react';
import './ReservationBox.css';
import ReservationCard from '../ReservationCard/ReservationCard'; 

const ReservationBox = ({ reservations }) => {

  console.log("Reservations array:", reservations);

  const cards = reservations.map((reservation, index) => {
    if (!reservation.id) {
      console.error("Missing or invalid id:", reservation);
    }
    return <ReservationCard key={reservation.id || index} reservation={reservation} />;
  });

  return (
    <div className='resy-container'>
      {cards}
    </div>
  );
};

export default ReservationBox;

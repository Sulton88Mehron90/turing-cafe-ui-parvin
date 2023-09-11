import './App.css';
import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';  
import { getData } from '../../apiCalls'; 

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (newReservation) => {
    setReservations([...reservations, newReservation]);
  };

  useEffect(() => {
    getData('reservations').then(data => {
      if (data) {
        setReservations(data);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addReservation={addReservation} />
      <div className='resy-container'>
        {reservations.map((reservation) => (
          <div key={reservation.id} className='reservation-card'>
            <h2>{reservation.name}</h2>
            <p>Date: {reservation.date}</p>
            <p>Time: {reservation.time}</p>
            <p>Number of guests: {reservation.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
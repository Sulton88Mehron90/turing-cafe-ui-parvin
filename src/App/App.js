import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from '../apiCalls'; 

function App() {
  const [reservations, setReservations] = useState([]); 


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
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
        {reservations.map((reservation, index) => (
          <div key={index} className='reservation-card'>
            <h2>{reservation.name}</h2>
            <p>Date: {reservation.date}</p>
            <p>Time: {reservation.time}</p>
            <p>Number of guests: {reservation.number_of_guests}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App; 
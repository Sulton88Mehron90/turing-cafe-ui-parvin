import './App.css';
import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';  
import ReservationBox from '../ReservationBox/ReservationBox';
import { getData } from '../../apiCalls'; 

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (newReservation) => {
    setReservations([...reservations, newReservation]);
  };

  useEffect(() => {
    getData('reservations').then(data => {
      if (data) {
        console.log("Fetched data:", data);
        setReservations(data);
      } else {
        console.log("No data received");
      }
    }).catch(error => {
      console.log("Error fetching data:", error);
    });
  }, []);
  

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addReservation={addReservation} />
      <ReservationBox reservations={reservations} />  {/* Use ReservationBox here */}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Form.css';

const Form = ({ addReservation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addReservation({ name, date, time, number });
    setName('');
    setDate('');
    setTime('');
    setNumber('');
  };

  return (
    <div className="form-container">  {/* Added this div with the class "form-container" */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Guests"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default Form;

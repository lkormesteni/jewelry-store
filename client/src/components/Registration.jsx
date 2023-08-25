import React, { useState } from 'react';
import axios from 'axios';

function Registration({changeToData}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');

  const handleRegistration = async () => {
    // Create a new user object to send to the server
    const newUser = {
      username,
      email,
      password,
      phoneNumber,
      city
    };

    // Send the new user data to the server for database insertion
    try {
      const response = await axios.post('http://127.0.0.1:3000/user', newUser);
      console.log('you just added', newUser);
      alert('you are tbiib')
      changeToData()
    } 
    catch (error) {
      console.error('Error during registration:', error);
      // You can add further error handling here
    }
  };

  return (
    <div className="registration-container">
      <h1 className='h1-login'>Registration</h1>
      <input className='inputs-login' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className='inputs-login' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='inputs-login' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input className='inputs-login' type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <input className='inputs-login' type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
      <button className='button-login' onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;

import React, { useState } from 'react';
import axios from 'axios';

function Login({ changeToData, changeToRegistration }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/user');

      if (response.status === 200) {
        const users = response.data; // Assuming the response contains an array of users

        // Loop through the users to check credentials
        for (const user of users) {
          if (user.username === username && user.password === password) {
            alert('Login successful!');
            changeToData();
            return; // Exit the loop since login is successful
          }
        }
        
        alert('Invalid credentials. Please try again.');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="Login">
      <div className="login-container">
        <h1 className='h1-login'>Login</h1>
        <input className='inputs-login' 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className='inputs-login'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='button-login' onClick={handleLogin}>Login</button>
        <button className='button-login' onClick={changeToRegistration}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;

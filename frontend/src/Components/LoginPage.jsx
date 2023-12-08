import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from "./NavBar.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    navigate('/inventory');
  };

  return (
    <div>
      <NavBar title='Inventory Manager' isLoggedIn={false}/>
      <h1>Login Page</h1>
      {message && <p>{message}</p>}
      <form action="/LoginPage" method="post">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <section>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </section>
        <a href="/RegistrationPage">Create Login</a>
      </form>
    </div>
  );
};

export default LoginPage;

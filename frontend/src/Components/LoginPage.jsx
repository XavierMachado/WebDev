import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar.js";
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/login', formData)
    .then(() => {
      navigate('/inventory');
    })
    .catch((error) => {
      setMessage(error.response.data.toString());
      console.error('Error logging in:', error);
    });
    //setFormData({ name: '', quantity: 0, price: 0.0 });
  };

  return (
    <div>
      <NavBar title='Inventory Manager' isLoggedIn={false}/>
      <h1>Login Page</h1>
      {message && <p>{message}</p>}
      <form action="/LoginPage" method="post" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={handleInputChange} value={formData.email} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required onChange={handleInputChange} value={formData.password} />
        </div>
        <section>
          <button type="submit">
            Login
          </button>
        </section>
        <a href="/RegistrationPage">Create Login</a>
      </form>
    </div>
  );
};

export default LoginPage;

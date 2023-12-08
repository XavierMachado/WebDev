import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import NavBar from "./NavBar.js";
import axios from 'axios';

const RegistrationPage = () => {
  const navigate = useNavigate();  // Use useNavigate hook
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      axios.post('http://localhost:8000/register', formData)
    .then(() => {
      navigate('/inventory');
    })
    .catch((error) => {
      setMessage(error.response.data.toString());
      console.error('Registration error:', error);
    });
      console.log('Registration data:', formData);

      // Redirect to the login page after successful registration
      navigate('/LoginPage');
    } catch (error) {
      setError('Registration failed. Please check your input and try again.');
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <NavBar title='Inventory Manager' isLoggedIn={false}/>
      <header>
        <h1>Registration Page</h1>
      </header>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="name">User</label>
          <input type="text" id="name" name="name" required onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required onChange={handleInputChange} />
        </div>
        <section>
          <button type="submit">Register</button>
        </section>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <a href="/LoginPage">Login</a>
      </form>
    </div>
  );
};

export default RegistrationPage;

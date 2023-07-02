import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [name, setName] = useState('nilesh');
  const [password, setPassword] = useState('nilsh@gmail.com');
  const [email, setEmail] = useState('nilsh@gmail.com');
  const [location, setLocation] = useState('nilesh');

const navigate=useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    // Send registration data to the backend using AJAX or any preferred method

    // Example using fetch API
    axios
    .post('http://localhost:5000/register', {
      name: name,
      password: password,
      email: email,
      location: location,
    })
    .then((response) => {
      // Handle success response
      console.log(response.data);
      navigate("/login",{"state":{"message":response.data}});
    })
    .catch((error) => {
      // Handle error response
      console.error('Registration failed:', error);
    });


  };

  return (
    <div className="container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

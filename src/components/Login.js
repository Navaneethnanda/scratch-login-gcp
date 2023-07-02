import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const location = useLocation();
const navigate=useNavigate();
  useEffect(()=>
  {
    console.log(location.state);
    if(location.state){
alert(location.state.message);
    }
    
  },[]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send login data to the backend using axios or any preferred method

    // Example using axios
    // Your login endpoint URL may be different, please update it accordingly
    axios
      .post('http://localhost:5000/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success response
        
      navigate("/profile",{"state":{"message":response.data}});
      })
      .catch((error) => {
        // Handle error response
        console.log("fddf");
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

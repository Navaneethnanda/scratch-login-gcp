import React, {  useState,useEffect } from 'react';
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  useEffect(()=>{
    const temail=localStorage.getItem('email');
    if(temail){
      alert("logout to visit login or registration page")
      navigate("/profile")
    }
    else{
      
     console.log("no user sessions found",temail)
    }
  },[]);  // eslint-disable-line



  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://containertwo-2rozri44gq-uc.a.run.app/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        if(response.data==="login success"){

        localStorage.setItem('email', email);
        localStorage.setItem("status",true);
          navigate("/profile");

        console.log("login sucess")
        }
        else{
          alert(response.data);
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className='flex items-center'>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>

        <Link to="/registration" className='text-blue-500 underline ml-auto'>register</Link>
        </div>
        
      </form>
    </div>
  );
};

export default LoginForm;

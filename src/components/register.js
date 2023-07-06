import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setnumber] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    const temail=localStorage.getItem('email');
    if(temail===""){
     console.log("no user sessions found")
     alert("logout to visit login or registration page")
    }
    else{
      alert("logout to visit login or registration page")
      navigate("/profile")
    }
  },[]); // eslint-disable-line



  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://containerone-2rozri44gq-uc.a.run.app/add', {
        name: name,
        password: password,
        email: email,
        number: number,
      })
      .then((response) => {
        console.log(response.data);
        if(response.data==="regestration sucess"){
          alert(response.data);
          navigate("/login");
        }
        else{
          alert(response.data);
        }
        
      })
      .catch((error) => {
        console.error('Registration failed:', error);
      });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5 text-center">User Registration</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-3"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-3"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-3"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700">
            phone number
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-3"
            id="number"
            value={number}
            onChange={(event) => setnumber(event.target.value)}
            required
          />
        </div>
       

        <div className='flex items-center'>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          register
        </button>

        <Link to="/login" className='text-blue-500 underline ml-auto'>login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

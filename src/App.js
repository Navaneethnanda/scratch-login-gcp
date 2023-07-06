


import React from 'react';
import RegistrationForm from './components/register';
import LoginForm from './components/Login';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profilepage from './components/Profilepage';


const App = () => {

  return(


    <Router>


    <Routes>
      <Route path='/' element={<RegistrationForm />} />
      <Route path='/registration' element={<RegistrationForm />} />
  
      <Route path='/Login' element={<LoginForm />} />
      <Route path='/profile' element={<Profilepage />} />
    
      </Routes>
  </Router>

  )
}


export default App;
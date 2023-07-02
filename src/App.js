// const express = require('express');
// const app = express();

// // Serve the register.html file
// app.get('/register', (req, res) => {
//   res.sendFile(__dirname + '/register.html');
// });

// // Add your other routes and server configuration here

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });


import React from 'react';
import RegistrationForm from './components/register';
import LoginForm from './components/Login';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profilepage from './components/Profilepage';


const App = () => {

  return(


    <Router>


    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/registration' element={<RegistrationForm />} />
  
      <Route path='/Login' element={<LoginForm />} />
      <Route path='/profile' element={<Profilepage />} />
    
      </Routes>
  </Router>

  )
}


export default App;
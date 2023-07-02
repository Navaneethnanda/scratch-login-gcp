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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";


const Profilepage = () => {
     const location = useLocation();


  return(

<h1>hi profile page {location.state.message}
</h1>

  );
}


export default Profilepage;
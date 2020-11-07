import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//importando navbar
import Navbar from './components/navbar';

ReactDOM.render(
  <React.Fragment>
    <Navbar />
  </React.Fragment>,
  document.getElementById('root')
);


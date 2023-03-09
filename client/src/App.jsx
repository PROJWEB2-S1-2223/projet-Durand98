import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './Menu';
import Titre from './Titre';
import ProjContent from './ProjContent';


function App()
   {
  const [count, setCount] = useState('');
  return(
    <div className="App">
      <Titre/>
      <Menu/>
      
</div>
       );
    }

export default App;

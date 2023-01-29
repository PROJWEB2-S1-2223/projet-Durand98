import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Menu from './Menu';
import Titre from './Titre';

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

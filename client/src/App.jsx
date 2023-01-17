import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState('');
function myFunction(even){
 setCount(even.select)
}
  function Menu(){
return (
  <div>
  <h1>Application de gestion de projets</h1>
  <h2>Menu</h2>
  <span  onChange={myFunction}>
    <li id="select"><input  onVan="Projet"  type= "checkbox"/>Projet</li>
    <li><input type= "checkbox"/>Equipe</li>
    <li><input type= "checkbox"/>Fichier</li>
    </span>


  </div>
);
  }


  return (
    <div className="App">
      <Menu/>

      <p>
      <strong>{count}</strong>
    </p>

</div>
  );
}

export default App;

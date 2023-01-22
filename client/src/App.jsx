import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';


function App() {
  const list=
[
  {nom: "Projet",prenom: "Projet",},
  {nom: "Agenda", prenom: "Angenda",},
  {nom: "Equipe", prenom: "Equipe",},
  {nom: "Fichier", prenom: "Fichier",},
];
  const [count, setCount] = useState('');
function myFunction(even){

  setCount(even.target.value);

}
function Titre(){
  return(
  <h1>Affichage du menu</h1>)
}

  function Menu(){
    return (<ul>
      {
        list.map(function Retour(item){
          return(<li><input onChange={myFunction}  id="dd" type= "checkbox"/>{item.nom}</li>);
        })
      }
    </ul>);
  }
  
  return (
    <div className="App">
<Titre/>
      <Menu/>
      <p>
      <strong>{count} </strong>
    </p>
</div>
  );
}

export default App;

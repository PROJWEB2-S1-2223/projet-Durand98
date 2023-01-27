import React, { useState } from 'react';
function Menu(){
  const [count, setCount] = useState('');
  const list=
  [
    {nom: "Projet",prenom: "Projet",},
    {nom: "Agenda", prenom: "Angenda",},
    {nom: "Equipe", prenom: "Equipe",},
    {nom: "Fichier", prenom: "Fichier",},
  ];


  function myFunction(even){
    setCount(even.target.value);}
  return (<ul>
    <p><strong>{count} </strong></p>
    {
      list.map(function Retour(item){
        return(
          <span onClick={myFunction} >
        <li>
      <button  value={item.nom} >
      {item.nom}
      </button>
      </li>
      </span>);
      })
    }
  </ul>);
  }

export default Menu;

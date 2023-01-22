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
    {
      list.map(function Retour(item){
        return(
        <li>
      <input onChange={myFunction} value={item.nom} type= "checkbox"/>
      {item.nom}
      </li>
      );
      })
    }
    <p><strong>{count} </strong></p>
  </ul>);
  }

export default Menu;

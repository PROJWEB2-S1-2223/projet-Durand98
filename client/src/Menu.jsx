import React, { useState } from 'react';
import Forme from './Forme';
import List from './List';
function Menu(){
  const [count, setCount] = useState('');
  const list=
  [
    {nom: "Projet",prenom: "Projet",},
    {nom: "Agenda", prenom: "Angenda",},
    {nom: "Equipe", prenom: "Equipe",},
    {nom: "Fichier", prenom: "Fichier",},
  ];
  const [proj, setProj] = useState([
    {
      nomProj: 'PRODUIT SAP',
      dureeProj: ' 3 MOIS ',
      nomChef: ' KEWOU  DURAND ',
    },
  ]);

  function addProj(newProj) {
    const newProjList = [...proj, newProj];
    setProj(newProjList);
  }

  function removeProj(nomProj) {
    const newProjList = proj.filter((ddd) => ddd.nomProj !== nomProj);
    setProj(newProjList);
  }


  function myFunction(even){
    setCount(even.target.value);
  console.log(even.target.value);}

  const [form,setForm]=useState(false);
  function booleanForme(){
    setForm(!form);
  }

  return(
  <ul>

  <li><button onClick={booleanForme}><h3>CREER UN PROJET</h3></button></li>
    {form && (
      <>
    <Forme onSubmit={addProj}/>
    <List list={proj} onRemove={removeProj}/>
    </>
    )}



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

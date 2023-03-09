import React, { useState,useEffect } from 'react';
import Forme from './Forme';
import List from './List';

function Projcontent(){

  const initialproj = JSON.parse(localStorage.getItem('proj'));
  const [proj, setProj] = useState(initialproj || [] );

  useEffect(() =>
  {
    localStorage.setItem('proj', JSON.stringify(proj));
  },
  [proj]);

  function addProj(newProj)
{
    const newProjList = [...proj, newProj];
    setProj(newProjList);
      }

  function removeProj(nomProj)
      {
    const newProjList = proj.filter((ddd) => ddd.nomProj !== nomProj);
    setProj(newProjList);
      }
  return(
    <>
    <h3>CREER UN PROJET</h3>
    <Forme onSubmit={addProj}/>
    <h2>Mes Projets </h2>
    <List list={proj} onRemove={removeProj}/>
    </>
       )
}
export default Projcontent;

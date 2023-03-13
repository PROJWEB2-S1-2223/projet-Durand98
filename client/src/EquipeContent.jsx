import React, { useState,useEffect } from 'react';
import FormEquipe from './FormEquipe';
import ListEquipe from './ListEquipe';

function EquipeContent(){

  const initialproj = JSON.parse(localStorage.getItem('fich'));
  const [equi, setEqui] = useState(initialproj || [] );

  useEffect(() =>
  {
    localStorage.setItem('equi', JSON.stringify(equi));
  },
  [equi]);

  function addEqui(newEqui)
{
    const newEquiList = [...equi, newEqui];
    setEqui(newEquiList);
      }

  function removeEquip(nomEqui)
      {
    const newEquiList = fich.filter((ddd) => ddd.nomFich !== nomEqui);
    setFich(newEquiList);
      }
  return(
    <>
    <h3>NOUVEAU FICHIER </h3>
    <FormFich onSubmit={addEqui}/>
    <h2>Mes Fichier </h2>
    <ListEquipe list={equi} onRemove={removeEquip}/>
    </>
       )
}
export default EquipeContent;

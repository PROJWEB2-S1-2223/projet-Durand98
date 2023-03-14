import React, { useState,useEffect } from 'react';
import FormFich from './FormFich';
import ListFich from './ListFich';

function Fichcontent(){

  const initialproj = JSON.parse(localStorage.getItem('fich'));
  const [fich, setFich] = useState(initialproj || [] );

  useEffect(() =>
 {
    localStorage.setItem('fich', JSON.stringify(fich));
  },
   [fich]);

  function addFich(newFich)
{
    const newFichList = [...fich, newFich];
    setFich(newFichList);
  }

  function removeFich(nomFich)
      {
    const newFichList = fich.filter((ddd) => ddd.nomFich !== nomFich);
    setFich(newFichList);
      }
  return(
    <>
    <h3>NOUVEAU FICHIER </h3>
    <FormFich onSubmit={addFich}/>
    <h2>Mes Fichier </h2>
    <ListFich list={fich} onRemove={removeFich}/>
    </>
       )
}
export default Fichcontent;

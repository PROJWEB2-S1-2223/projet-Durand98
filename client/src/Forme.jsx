/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import ProjContent from './ProjContent';
function Forme({ onSubmit }) {
  const [counts, setCounts] = useState({
    nomProj: '',
    dureeProj: '',
    nomChef: '',
  });

  function handleNomProjChange(event) {
    const newNomProj = event.target.value;
    setCounts({
      ...counts,
      nomProj: newNomProj,
    });
  }

  function handleDureeProjChange(event) {
    const newDureer = event.target.value;
    setCounts({
      ...counts,
      dureeProj: newDureer,
    });
  }

  function handleNomChefChange(event) {
    const newNomChef = event.target.value;
    setCounts({
      ...counts,
      nomChef: newNomChef,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onSubmit(counts);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <p>
      <FormInput value={counts.nomProj} onChange={handleNomProjChange}>
        NOM DU PROJET:{'' }
        </FormInput>
      </p>
      <p>
      <FormInput value={counts.dureeProj} onChange={handleDureeProjChange}>
        DUREE DU PROJET:{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomChef} onChange={handleNomChefChange}>
        NOM DU CHEF DE PROJET:{''}
        </FormInput>
      </p>
      <p>
        <button type="submit">Ajouter Projet</button>
      </p>
    </form>

  );
}
function FormInput({ value, onChange, children }) {
  return (
  <label>{children} <input type="text" value={value} onChange={onChange} />
  </label>
  );}

export default Forme;

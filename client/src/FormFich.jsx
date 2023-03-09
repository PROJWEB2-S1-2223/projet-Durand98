import React, { useState } from 'react';
import ProjContent from './ProjContent';
function FormeFich({ onSubmit }) {
  const [counts, setCounts] = useState({
    intitul: '',
    idProj: '',
    nomMembre: '',
  });

  function handleIntitulChange(event) {
    const newIntitul = event.target.value;
    setCounts({
      ...counts,
      intitul: newIntitul,
    });
  }

  function handleIdProjChange(event) {
    const newIdProj = event.target.value;
    setCounts({
      ...counts,
      idProj: newIdProj,
    });
  }

  function handleNomMembreChange(event) {
    const newNomMembre = event.target.value;
    setCounts({
      ...counts,
      nomMenbre: newNomMembre,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onSubmit(counts);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <p>
      <FormInput value={counts.intitul} onChange={handleIntitulChange}>
        Partie du Projet Intitule:{'' }
        </FormInput>
      </p>
      <p>
      <FormInput value={counts.idProj} onChange={handleIdProjChange}>
        ID Du Projet /NU-Projet:{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre} onChange={handleNomMembreChange}>
        NOM DU Membre :{''}
        </FormInput>
      </p>
      <p>
        <button type="submit">Ajouter Fichier</button>
      </p>
    </form>

  );
}
function FormInput({ value, onChange, children }) {
  return (
  <label>{children} <input type="text" value={value} onChange={onChange} />
  </label>
  );}

export default FormeFich;

import React, { useState } from 'react';
function FormAgenda({ onSubmit }) {
  const [counts, setCounts] = useState({
    nomProj: '',
    periode: '',
    dure: '',
  });

  function handleNomProjChange(event) {
    const newNomProj = event.target.value;
    setCounts({
      ...counts,
      nomProj: newNomProj,
    });
  }

  function handleperiodeProjChange(event) {
    const newDureer = event.target.value;
    setCounts({
      ...counts,
      periode: newDureer,
    });
  }

  function handledureChange(event) {
    const newDure = event.target.value;
    setCounts({
      ...counts,
      dure: newDure,
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
      <FormInput value={counts.periode} onChange={handleperiodeProjChange}>
        Periode / semaine: {''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.dure} onChange={handledureChange}>
        Duree : {''}
        </FormInput>
      </p>
      <p>
        <button type="submit">Ajouter dans l'Agenda</button>
      </p>
    </form>

  );
}
function FormInput({ value, onChange, children }) {
  return (
  <label>{children} <input type="text" value={value} onChange={onChange} />
  </label>
  );}

export default FormAgenda;

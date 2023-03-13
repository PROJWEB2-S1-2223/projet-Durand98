import React, { useState } from 'react'
function FormEquipe({ onSubmit }) {
  const [counts, setCounts] = useState({
    numEqu: '',
    idProj: '',
    nomMembre: '',
  });

  function handleNumEquChange(event) {
    const newNumEqu = event.target.value;
    setCounts({
      ...counts,
      intitul: newNumEqu,
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
      nomMembre: newNomMembre,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onSubmit(counts);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <p>
      <FormInput value={counts.numEqu} onChange={handleNumEquChange}>
        Equipe Numero :{ '' }
        </FormInput>
      </p>
      <p>
      <FormInput value={counts.idProj} onChange={handleIdProjChange}>
        Nom du projet :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre} onChange={handleNomMembreChange}>
        NOM DU Membre :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre} onChange={handleNomMembreChange}>
        NOM DU Membre :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre} onChange={handleNomMembreChange}>
        NOM DU Membre :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre} onChange={handleNomMembreChange}>
        NOM DU Membre :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre} onChange={handleNomMembreChange}>
        NOM DU Membre :{''}
        </FormInput>
      </p>
      <p>
        <button type="submit">Ajouter Equipe</button>
      </p>
    </form>

  );
}
function FormInput({ value, onChange, children }) {
  return (
  <label>{children} <input type="text" value={value} onChange={onChange} />
  </label>
  );}

export default FormEquipe;

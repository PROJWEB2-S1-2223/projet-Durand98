import React, { useState } from 'react';
function FormEquipe({ onSubmit }) {
  const [counts, setCounts] = useState({
    numEqu: '',
    idProj: '',
    nomMembre: '',
    nomMembre2: '',
    nomMembre3: '',
    nomMembre4: '',
  });

  function handleNumEquChange(event) {
    const newNumEqu = event.target.value;
    setCounts({
      ...counts,
      numEqu: newNumEqu,
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
  function handleNomMembre2Change(event) {
    const newNomMembre = event.target.value;
    setCounts({
      ...counts,
      nomMembre2: newNomMembre,
    });
  }
  function handleNomMembre3Change(event) {
    const newNomMembre = event.target.value;
    setCounts({
      ...counts,
      nomMembre3: newNomMembre,
    });
  }
  function handleNomMembre4Change(event) {
    const newNomMembre = event.target.value;
    setCounts({
      ...counts,
      nomMembre4: newNomMembre,
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
          Equipe Numero :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.idProj} onChange={handleIdProjChange}>
          Nom du projet :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre} onChange={handleNomMembreChange}>
          NOM DU Membre 1 :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre2} onChange={handleNomMembre2Change}>
          NOM DU Membre 2 :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre3} onChange={handleNomMembre3Change}>
          NOM DU Membre 3 :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.nomMembre4} onChange={handleNomMembre4Change}>
          NOM DU Membre 4 :{''}
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
    <label>
      {children} <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

export default FormEquipe;

import React, { useState } from 'react';

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
        <label>
        Nom du projet: <input type="text" name="nomProj" value={counts.nomProj} onChange={handleNomProjChange} />
        </label>
      </p>
      <p>
        <label>
          Duree du projet: <input type="text" name="dureeProj" value={counts.dureeProj} onChange={handleDureeProjChange} />
        </label>
      </p>
      <p>
        <label>
          NOM du Chef de Projet: <input type="text" name="nomChef" value={counts.nomChef} onChange={handleNomChefChange} />
        </label>
      </p>
      <p>
        <button type="submit">Ajouter Projet</button>
      </p>
    </form>
  );
}

export default Forme;

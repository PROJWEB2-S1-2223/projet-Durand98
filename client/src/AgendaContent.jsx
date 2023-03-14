import React, { useState,useEffect } from 'react';
import FormAngenda from './FormAngenda;
import ListAngenda from './ListAngenda';

function AgendaContent() {
  const initialproj = JSON.parse(localStorage.getItem('ag'));
  const [ag, setAg] = useState(initialproj || []);

  useEffect(() => {
    localStorage.setItem('proj', JSON.stringify(ag));
  }, [ag]);

  function addAgen(newAg) {
    const newProjList = [...ag, newAg];
    setProj(newProjList);
  }

  function removeAgen(nomProj) {
    const newProjList = proj.filter((ddd) => ddd.nomProj !== nomProj);
    setAg(newProjList);
  }
  return (
    <>
      <h3>Nouvel Agenda</h3>
      <FormAngenda onSubmit={addAgen} />
      <h2>Mon Agenda </h2>
      <ListAngenda list={proj} onRemove={removeAgen} />
    </>
  );
}
export default AgendaContent;

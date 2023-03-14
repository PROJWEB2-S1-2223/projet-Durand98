import React, { useState, useEffect } from 'react';
import FormAngenda from './FormAngenda';
import ListAngenda from './ListAngenda';

function AgendaContent() {
  const initialproj = JSON.parse(localStorage.getItem('ag'));
  const [ag, setAg] = useState(initialproj || []);

  useEffect(() => {
    localStorage.setItem('ag', JSON.stringify(ag));
  }, [ag]);

  function addAgen(newAg) {
    const newProjList = [...ag, newAg];
    setAg(newProjList);
  }

  function removeAgen(nomProj) {
    const newProjList = ag.filter((ddd) => ddd.nomProj !== nomProj);
    setAg(newProjList);
  }
  return (
    <>
      <h3>Nouvel Agenda</h3>
      <FormAngenda onSubmit={addAgen} />
      <h2>Mon Agenda </h2>
      <ListAngenda list={ag} onRemove={removeAgen} />
    </>
  );
}
export default AgendaContent;

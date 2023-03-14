import React, { useState, useEffect } from 'react';
import FormEquipe from './FormEquipe';
import ListEquipe from './ListEquipe';

function EquipeContent() {
  const initialproj = JSON.parse(localStorage.getItem('equi'));
  const [equi, setEqui] = useState(initialproj || []);

  useEffect(() => {
    localStorage.setItem('equi', JSON.stringify(equi));
  }, [equi]);

  function addEqui(newEqui) {
    const newEquiList = [...equi, newEqui];
    setEqui(newEquiList);
  }

  function removeEquip(nomEqui) {
    const newEquiList = equi.filter((ddd) => ddd.nomEqui !== nomEqui);
    setEqui(newEquiList);
  }
  return (
    <>
      <h3>NOUVELLE EQUIPE </h3>
      <FormEquipe onSubmit={addEqui} />
      <h2>Mes Equipes </h2>
      <ListEquipe list={equi} onRemove={removeEquip} />
    </>
  );
}
export default EquipeContent;

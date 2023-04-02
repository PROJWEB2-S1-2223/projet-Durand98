import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Alert, Spinner, Stack } from 'react-bootstrap';
import FormEquipe from './FormEquipe';
import ListEquipe from './ListEquipe';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function EquipeContent() {
  const initialEqui = JSON.parse(localStorage.getItem('equi'));
  const [equi, setEqui] = useState(initialEqui || []);

  useEffect(() => {
    localStorage.setItem('equi', JSON.stringify(equi));
  }, [equi]);

  function addEqui(newEqui) {
    const newEquiList = [...equi, newEqui];
    setEqui(newEquiList);
  }

  function removeEqui(nomEqui) {
    const newEquiList = equi.filter((eq) => eq.nomEqui !== nomEqui);
    setEqui(newEquiList);
  }

  return (
    <>
      <h3>NOUVELLE EQUIPE</h3>
      <FormEquipe onSubmit={addEqui} />
      <Stack>
        <h2>Mes Equipes</h2>
        <ProjTabl />
        <ListEquipe list={equi} onRemove={removeEqui} />
      </Stack>
    </>
  );
}

function ProjTabl() {
  const { data, error } = useSWR('/api/personnes', fetcher);

  if (error) {
    return <Alert variant="danger">Une erreur s'est produite.</Alert>;
  }

  if (!data) {
    return <Spinner  />;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>CHEF PROJET</th>
        </tr>
      </thead>
      <tbody>
        {data.map((projet) => (
          <tr key={projet.id}>
            <td>{projet.nomPersonne}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EquipeContent;

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Alert, Spinner, Stack } from 'react-bootstrap';
import FormAngenda from './FormAngenda';
import ListAngenda from './ListAngenda';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function AgendaContent() {
  const initialproj = JSON.parse(localStorage.getItem('ag'));
  const [ag, setAg] = useState(initialproj || []);

  /* useEffect(() => {
    localStorage.setItem('ag', JSON.stringify(ag));
  }, [ag]);
*/
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
      <Stack>
        <h2>Mon Agenda </h2>
        <ProjTabl />
        <ListAngenda list={ag} onRemove={removeAgen} />
      </Stack>
    </>
  );
}

function ProjTabl() {
  const { data, error } = useSWR('/api/agendas', fetcher);

  if (error) {
    return <Alert variant="danger">Une erreur s'est produite.</Alert>;
  }

  if (!data) {
    return <Spinner />;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>PROJET</th>
          <th>PERIODE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((projet) => (
          <tr key={projet.id}>
            <td>{projet.nomPro}</td>
            <td>{projet.periode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default AgendaContent;

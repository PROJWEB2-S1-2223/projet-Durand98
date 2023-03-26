import React, { useState, useEffect } from 'react';
import { Alert, Spinner, Stack } from 'react-bootstrap';
import Menu from './Menu';
import Forme from './Forme';
import Titre from './Titre';
import List from './List';
import userSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Projcontent() {
 const initialproj = JSON.parse(localStorage.getItem('proj'));
  const [proj, setProj] = useState(initialproj || []);

  // useEffect(() =>
  // {
  //   localStorage.setItem('proj', JSON.stringify(proj));
  // },
  //[proj]);

  function addProj(newProj) {
    const newProjList = [...proj, newProj];
    setProj(newProjList);
  }

  function removeProj(nomProj) {
    const newProjList = proj.filter((ddd) => ddd.nomProj !== nomProj);
    setProj(newProjList);
  }
  return (
    <>
      <h3>CREER UN PROJET</h3>
      <Forme onSubmit={addProj} />
      <Stack>
        <h2>Mes Projets </h2>
        <ProjTable />
        <List list={proj} onRemove={removeProj} />
      </Stack>
    </>
  );
}

function ProjTable() {
  const { data, error, isLoading } = userSWR('/api/projets', fetcher);
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Alert variant="danger">Une erreur s&apos;est produite</Alert>;
  }
  if (data) {
    return (
      <table>
        <thead>
          <tr>
            <th>NOM PROJET</th>
            <th>DATE DE DEBUT</th>
            <th>DATE DE FIN</th>
            <th>CHEF PROJET</th>
          </tr>
        </thead>
        <tbody>
          {data.map((projet) => (
            <tr>
              <td>{projet.nomProj}</td>
              <td>{projet.DateDebut}</td>
              <td>{projet.DateFin}</td>
              <td>{projet.nomChef}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    //<span>{JSON.stringify(data)}</span>;
  }
}

export default Projcontent;

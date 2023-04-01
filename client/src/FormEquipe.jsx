/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import useSWR from 'swr';

import { Alert, Spinner, Stack } from 'react-bootstrap';

function FormeEquipe({ onSubmit }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [counts, setCounts] = useState({
    nomMembre: '',
  });
  const [selectedProj, setSelectedProj] = useState('');
  const [selecteMem, setSelecteMen] = useState('');

  const [validated, setValidated] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  function handleNomMembreChange(event) {
    const newNomChef = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      nomMembre: newNomChef,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity() === true) {
      setFormDisabled(true);
      setShowNotif(false);
      setValidated(true);

      fetch('/api/personnes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(counts),
      })
        .then(() => {
          setCounts({
            nomMembre: '',
          });
          setFormDisabled(false);
          setShowNotif(true);
          setValidated(false);
          console.log('reussi');
        })
        .catch((err) => console.error(err));
    } else {
      setValidated(true);
    }
  }

  function handleProjChange(event) {
    setSelectedProj(event.target.value);
  }

  function handleMenChange(event) {
    setSelecteMen(event.target.value);
  }

  function ProjOptions() {
    const { data, error } = useSWR('/api/projets', fetcher);

    if (error) {
      return <option value="">Une erreur s'est produite lors du chargement des projets</option>;
    }

    if (!data) {
      return <option value="">Chargement des projets...</option>;
    }

    return (
      <>
        <option value="">--Choisir un projet--</option>
        {data.map((projet) => (
          <option key={projet.id} value={projet.id}>
            {projet.nomProj}
          </option>
        ))}
      </>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <label htmlFor="projSelect">Choisir un projet:</label>
      <select id="projSelect" value={selectedProj} onChange={handleProjChange}>
        <ProjOptions />
      </select>{' '}
      /{' '}
      <p>
        <FormInputText value={counts.nomMembre} onChange={handleNomMembreChange}>
          NOM DU MEMBRE:{''}
        </FormInputText>
      </p>
      <p>
        <button type="submit" disabled={formDisabled}>
          Ajoute
        </button>
      </p>
      {validated && <div className="error">Veuillez remplir tous les champs</div>}
      {showNotif && <div className="success"> membre ajouté avec succès</div>}
    </form>
  );
}

function FormInputText({ value, onChange, children }) {
  return (
    <label>
      {children} <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
export default FormeEquipe;
